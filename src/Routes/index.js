import { FollowPage, HomePage, Profile, UploadPage } from '../Pages';
import config from '~/Config';
import LayoutUpload from '../Layouts/Upload/upload';
let publishRoute = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.follow,
        component: FollowPage,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: UploadPage,
        layout: LayoutUpload,
    },
];
let privateRoute = [];
export { publishRoute, privateRoute };
