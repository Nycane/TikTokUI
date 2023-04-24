import { FollowPage, HomePage, Profile, UploadPage } from '../Pages';
import routesConfig from '~/Config/routes.js';
import LayoutUpload from '../Layouts/Upload';
let publishRoute = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
    {
        path: routesConfig.follow,
        component: FollowPage,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: UploadPage,
        layout: LayoutUpload,
    },
];
let privateRoute = [];
export { publishRoute, privateRoute };
