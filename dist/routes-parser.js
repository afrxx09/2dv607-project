'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseLinks;
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
    //If it has no component and none of its children is an index route, it should not render as a link.
    return !path ? null : parentPath + path;
}

function getTitle(node) {
    if (node.title) {
        return node.title;
    } else {
        if (node.component) {
            return node.component.displayName || node.component.name;
        }
    }
    return 'Un-named link';
}

function getChildren(node, href) {
    if (node.childRoutes) {
        var children = parseLinks(node, href);
        if (children.length > 0) {
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
        title = getTitle(node),
        children = getChildren(node, href);
    if (!node.component && !hasChildIndexRoute(children)) {
        href = null;
    }
    if (!node.component && !children) {
        return null;
    }
    //Parameter routes ignored, should not be renderd
    if (href && (href.indexOf(':') === 0 || href.indexOf('/:') !== -1)) {
        return null;
    }
    //create a link object
    var link = {
        isIndex: false,
        href: href,
        title: title,
        children: children
    };
    return link;
}

function parseLinks(routes, parentPath) {
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
}