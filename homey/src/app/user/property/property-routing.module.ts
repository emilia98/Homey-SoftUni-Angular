import { RouterModule, Routes } from "@angular/router";
import { AddPropertyComponent } from "./add-property/add-property.component";
import { PropertyRootComponent } from "./property-root/property-root.component";

const routes: Routes = [
    {
        path: 'property',
        component: PropertyRootComponent,
        children: [
            {
                path: 'add',
                component: AddPropertyComponent
            }
        ]
    }
];

export const PropertyRoutingModule = RouterModule.forRoot(routes);