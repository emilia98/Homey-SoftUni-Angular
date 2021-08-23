import { RouterModule, Routes } from "@angular/router";
import { AuthRootComponent } from "./auth-root/auth-root.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'auth',
        component: AuthRootComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: '**',
                component: LoginComponent
            }
        ]
    }
];

export const AuthRoutingModule = RouterModule.forRoot(routes);