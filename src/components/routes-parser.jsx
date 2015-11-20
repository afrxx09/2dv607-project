export default function parseLinks(routes){
    let indexRoute = routes.indexRoute || null,
        childRoutes = routes.childRoutes || null, 
        links = [];
    if(indexRoute){
        links.push({
            href: routes.path,
            title: indexRoute.title ||
                indexRoute.component.displayName
        });
    }
    if(childRoutes && childRoutes.length > 0){
        for(let i = 0; i < childRoutes.length; i++){
            let child = childRoutes[i];
            links.push({
                href: child.path,
                title: child.title ||
                    child.component.displayName ||
                    child.component.name
            });
        }
    }
    return links;
}