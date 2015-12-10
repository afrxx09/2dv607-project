'use strict';

function hasChildIndexRoute(children) {
    if (children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].isIndex) {
                return true;
            }
        }
    }
    return false;
}

function getHref(path, parentPath) {
    parentPath = parentPath ? parentPath + '/' : '';
    /*
        Not pretty, problem:
        Index routes has no path so their parentPath becomes the path,
        regular child routes(of root) would later also add their parent path resulting in a double slash.
    */
    parentPath = parentPath.replace('//', '/');
    return !path ? null : parentPath + path;
}

function getTitle(node) {
    var comp = node.component || {};
    return node.title || comp.displayName || comp.name || 'Un-named link';
}

function getChildren(node, href) {
    if (node.childRoutes) {
        var children = parseLinks(node, href);
        if (children.length) {
            return children;
        }
    }
    return null;
}

function createLink(node, parentPath) {
    if (node.hide) {
        return null;
    }
    var href = getHref(node.path, parentPath),
        children = getChildren(node, href);
    //Has no component, should not render as link
    if (!node.component) {
        href = null;
    }
    //no component nor children should not be rendered
    if (!node.component && !children) {
        return null;
    }
    //Parameter routes ignored, should not be renderd
    if (href && (href.indexOf(':') === 0 || href.indexOf('/:') !== -1)) {
        return null;
    }
    return {
        isIndex: false,
        href: href,
        title: getTitle(node),
        children: children
    };
}

var parseLinks = function parseLinks(routes, parentPath) {
    var indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || [],
        links = [];
    if (indexRoute) {
        links.push({
            isIndex: true,
            href: getHref(parentPath),
            title: getTitle(indexRoute)
        });
    }
    for (var i = 0; i < childRoutes.length; i++) {
        var link = createLink(childRoutes[i], parentPath);
        if (link !== null) {
            links.push(link);
        }
    }
    return links;
};

module.exports = parseLinks;