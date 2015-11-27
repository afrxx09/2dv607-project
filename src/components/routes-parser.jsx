function hasChildIndexRoute(children){
    if(children){
        for(let i = 0; i < children.length; i++){
            if(children[i].isIndex){
                return true;
            }
        }
    }
    return false;
}

function createLink(node, parent){
    let parentPath = (parent) ? parent + '/' : '',
        component = node.component || null,
        href = (!node.path) ? null:  parentPath + node.path;
    
    //Parameter routes ignored, should not be renderd
    if(href !== null && (href.indexOf(':') === 0 || href.indexOf('/:') !== -1)){
        return null;
    }
    //create a link object
    let link = {
        isIndex: false,
        href: href,
        title: node.title ||
            (component) ?
                component.displayName || component.name :
                'name me plix',
        children: (node.childRoutes) ?
            parseLinks(node, href) :
            null
    }
    //When building child-paths with recursion, can re turn empty array.
    if(link.children && link.children.length === 0){
        link.children = null;
    }
    //If a Route has no component and has no children dont render
    if(!component && !link.children){
        return null;
    }
    if(!component && !hasChildIndexRoute(link.children)){
        link.href = null;
    }
    return link;
}

export default function parseLinks(routes, parentPath){
    let indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || [],
        links = [];
    if(indexRoute){
        links.push({
            isIndex: true,
            href: routes.path,
            title: indexRoute.title ||
            (indexRoute.component) ?
                indexRoute.component.displayName || indexRoute.component.name :
                'name me plix'
        });
    }
    for(let i = 0; i < childRoutes.length; i++){
        let link = createLink(childRoutes[i], parentPath);
        if(link !== null){
            links.push(link);
        }
    }
    return links;
}