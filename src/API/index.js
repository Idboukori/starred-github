import AppConfig from "../Constant/AppConfig";

export default function Api(){

    return{
        getrepos : function (last30days,page) {
            return fetch(`${AppConfig.BACK_END.API_BASE_URL}`+last30days+`${AppConfig.BACK_END.API_OPTIONS_URL}`+page);
        }
    }
}
