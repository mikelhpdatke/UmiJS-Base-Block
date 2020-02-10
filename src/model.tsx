import base from '@/utils/base';
import modelExtend from 'dva-model-extend';
import Services from '@/pages/PAGE_NAME/service';

export default modelExtend(base(Services), {
    namespace: 'PAGE_NAME',
})
