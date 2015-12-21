'use strict';

function getIndexRouteFromChildren(children) {
    if (children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].isIndex) {
                return children[i];
            }
        }
    }
    return null;
}

/**
*   TODO: Clean this mess up
*/
function getHref(path, parentPath) {
    if (path && path.indexOf('/') === 0) {
        parentPath = '/';
    } else {
        parentPath = parentPath ? parentPath + '/' : '';
    }
    /*
        Not pretty, problem:
        Index routes has no path so their parentPath becomes the path,
        regular child routes(of root) would later also add their parent path resulting in a double slash.
    */
    path = !path ? null : parentPath + path;
    return !path ? null : path.replace('//', '/');
}

function getTitle(node) {
    var comp = node.component || {};
    return node.title || comp.displayName || comp.name || 'Un-named link';
}

function getChildren(node, href) {
    if (node.childRoutes) {
        var children = parseLinks(node);
        if (children.length) {
            return children;
        }
    }
    return [];
}

/**
*   TODO: Clean this mess up
*/
function createLink(node, parentPath) {
    if (node.hide) {
        return null;
    }
    var href = getHref(node.path, parentPath),
        title = getTitle(node),
        children = getChildren(node, href),
        indexRoute = getIndexRouteFromChildren(children),
        hasIndexRoute = indexRoute !== null;

    if (!node.component) {
        //no component
        if (!children.length) {
            //no children
            return null; //don't render
        }

        if (hasIndexRoute) {
            children.splice(children.indexOf(indexRoute), 1); //remove indexroute from children
            if (!node.title) {
                //node has no title attr
                title = getTitle(indexRoute); //take title from index route instead
            }
        }
        if (children.length) {
            //if there are children after index is removed
            href = null; //do not make a link
        }
    }
    //Parameter routes ignored, should not be renderd
    if (href && (href.indexOf(':') === 0 || href.indexOf('/:') !== -1)) {
        return null;
    }
    return {
        isIndex: false,
        href: href,
        title: title,
        children: children
    };
}

var parseLinks = function parseLinks(routes) {
    var indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || [],
        links = [];
    if (indexRoute) {
        links.push({
            isIndex: true,
            href: getHref(routes.path),
            title: getTitle(indexRoute)
        });
    }
    for (var i = 0; i < childRoutes.length; i++) {
        var link = createLink(childRoutes[i], routes.path);
        if (link !== null) {
            links.push(link);
        }
    }
    return links;
};

module.exports = parseLinks;