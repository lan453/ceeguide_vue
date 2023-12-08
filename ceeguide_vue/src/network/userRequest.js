import { request } from './HttpUtil'

let instance = request();
let DicRequest = {
    listProvince() {
        return instance.get('/client/listProvince');
    },
    login(param) {
        return instance.post("/client/login", {
            id: param.id,
            name: param.name,
            password: param.password,
            identity: param.identity,
            province: param.province,
            selectedsub: param.selectedsub,
        })
    },
    addData(params) {
        let url = "/client/add?"
        for (let pro in params) {
            url = url + pro + "=" + params[pro] + "&";
        }
        return instance.post(url, {
            headers: {
                'Content-Type': 'appLication/x-www-form-urlencoded'
            }
        })
    },
    listUniversity(){
        return instance.get('/client/listUniversity');
    },
    queryParamBySub(param) {
        let url = "/client/queryParamBySub?";
        for (let pro in param) {
            if (param[pro] == null || param[pro] == '') {
                continue;
            }
            url = url + pro + '=' + param[pro] + '&';
        }
        console.log(url)
        return instance.post(url);
    },
    queryParamByUni(name,param) {
        let url = "/client/queryParamByUni/"+name+"?";
        for (let pro in param) {
            if (param[pro] == null || param[pro] == '') {
                continue;
            }
            url = url + pro + '=' + param[pro] + '&';
        }
        return instance.get(url);
    },
    updataData(params) {
        let url = "/client/update?"
        for (let pro in params) {
            url = url + pro + "=" + params[pro] + "&";
        }
        return instance.put(url, {
            headers: {
                'Content-Type': 'appLication/x-www-form-urlencoded'
            }
        })
    },
    addQueryRecord(params){
        let url = "/client/addQueryRecord?"
        for (let pro in params) {
            url = url + pro + "=" + params[pro] + "&";
        }
        return instance.post(url, {
            headers: {
                'Content-Type': 'appLication/x-www-form-urlencoded'
            }
        })
    },
    queryPageData(param) {
        let url = "/client/queryPageUnion?";
        for (let pro in param) {
            if (param[pro] == null || param[pro] == '') {
                continue;
            }
            url = url + pro + '=' + param[pro] + '&';
        }
        return instance.get(url);
    },
    queryUnionList() {
        return instance.get('/client/queryUnionList');
    },
    queryPageSR(param) {
        let url = "/client/queryPageSR?";
        for (let pro in param) {
            if (param[pro] == null || param[pro] == '') {
                continue;
            }
            url = url + pro + '=' + param[pro] + '&';
        }
        return instance.post(url);
    },
    listRequirement() {
        return instance.get('/client/listRequirement');
    },
    queryPageMajor(param) {
        let url = "/client/queryPageMajor?";
        for (let pro in param) {
            if (param[pro] == null || param[pro] == '') {
                continue;
            }
            url = url + pro + '=' + param[pro] + '&';
        }
        return instance.post(url);
    },
    listCategory() {
        return instance.get('/client/listCategory');
    },

}

export default DicRequest;