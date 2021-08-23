import { RouterModule, Routes } from "@angular/router";
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
            }
        ]
    }
]

export const UserRoutingModule = RouterModule.forRoot(routes);