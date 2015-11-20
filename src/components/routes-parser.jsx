function createLink(node, parent){
    let parentPath = (parent) ? parent + '/' : '',
        component = node.component || null,
        href = (!node.path) ? null:  parentPath + node.path;
    return {
        href: href,
        title: node.title ||
            (component) ?
                component.displayName || component.name :
                'name me plix',
        children: (node.childRoutes) ?
            parseLinks(node, href) :
            null
    }
}

export default function parseLinks(routes, parentPath){
    let indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || [],
        links = [];
    if(indexRoute){
        //indexRoute.path = routes.path;
        //indexRoute.children = null;
        links.push({
            href: routes.path,
            title: indexRoute.title ||
            (indexRoute.component) ?
                indexRoute.component.displayName || indexRoute.component.name :
                'name me plix'
        });
    }
    for(let i = 0; i < childRoutes.length; i++){
        links.push(createLink(childRoutes[i], parentPath));
    }
    return links;
}