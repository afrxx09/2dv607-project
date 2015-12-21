/**
*   returns Index route from the children if it is found, also removes it from the children array so that it only 
*   contains "real" children.
*/
function getIndexRouteFromChildren(children){
    if(children){
        for(let i = 0; i < children.length; i++){
            if(children[i].isIndex){
                var indexRoute = children.splice(children.indexOf(i), 1); //remove indexroute from children
                return indexRoute[0];
            }
        }
    }
    return null;
}

/**
*   TODO: Clean this mess up
*/
function getHref(path, parentPath){
    if(path && path.indexOf('/') === 0){
        parentPath = '/';
    }
    else{
        parentPath = (parentPath) ? parentPath + '/' : '';
    }
    /*
        Not pretty, problem:
        Index routes has no path so their parentPath becomes the path,
        regular child routes(of root) would later also add their parent path resulting in a double slash.
    */
    path = (!path) ? null : parentPath + path;
    return (!path) ? null : path.replace('//', '/');
}

function getTitle(node){
    let comp = node.component || {};
    return node.title || comp.displayName || comp.name || 'Un-named link';
}

/**
*   Returns all children that are "real" link routes.
*   Not: hidden or parameter routes
*/
function getChildren(node, href){
    if(node.childRoutes){
        let children = parseLinks(node);
        if(children.length){
            return children;
        }
    }
    return [];
}

/**
*   Reads the information of the node(route) to determine if a link should be created from it. 
*/
function createLink(node, parentPath){
    if(node.hide){
        return null;
    }
    var children = getChildren(node, href),//all children(inc. index route)
        indexRoute = getIndexRouteFromChildren(children),//also removes index route from children arr
        hasIndexRoute = indexRoute !== null;
    
    if (!node.component && !children.length && !hasIndexRoute){
        return null;
    }
    //If no component, but has children, should not be a link
    var href = (!node.component && children.length) ?
        null : getHref(node.path, parentPath);
    //Use index route for title if there is no component nor title on the node
    var title = (!node.component && !node.title && hasIndexRoute) ?
        getTitle(indexRoute) : getTitle(node);
    
    //Parameter routes ignored, should not be renderd
    if(href && (href.indexOf(':') === 0 || href.indexOf('/:') !== -1)){
        return null;
    }
    return {
        isIndex: false,
        href: href,
        title: title,
        children: children
    };
}
/**
*   recursively goes through child routes(normally starts with children of root) to determine what routes should be 
*   rendered as links 
*/
var parseLinks = function(routes){
    let indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || [],
        links = [];
    if(indexRoute){
        links.push({
            isIndex: true,
            href: getHref(routes.path),
            title: getTitle(indexRoute)
        });
    }
    for(let i = 0; i < childRoutes.length; i++){
        let link = createLink(childRoutes[i], routes.path);
        if(link !== null){
            links.push(link);
        }
    }
    return links;
};

module.exports = parseLinks;
