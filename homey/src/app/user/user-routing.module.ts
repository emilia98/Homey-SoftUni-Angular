import { RouterModule, Routes } from "@angular/router";
import { PropertyRootComponent } from "./property/property-root/property-root.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserRootComponent } from "./user-root/user-root.component";

const routes: Routes = [
    {
        path: '',
        component: UserRootComponent,
        children: [
            {
                path: 'profile',
                component: UserProfileComponent
            },
            {
                path: "property",
                component: PropertyRootComponent
            }
        ]
    }
]

export const UserRoutingModule = RouterModule.forRoot(routes);