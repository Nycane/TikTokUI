import { FollowPage, HomePage, UploadPage } from '../Pages';
import LayoutUpload from '../Layouts/Upload';
let publishRoute = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/follow',
        component: FollowPage,
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: LayoutUpload,
    },
];
let privateRoute = [];
export { publishRoute, privateRoute };
