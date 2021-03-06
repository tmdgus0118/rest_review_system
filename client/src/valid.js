/* eslint-disable */
export default {
    findId : {
        name : [/.+/, '이름을 제대로 입력해주세요.'],
        email : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, '잘못된 이메일 형식 입니다.']
    },
    findPw : {
        id : [/[a-zA-Z0-9_]{3,12}/, '아이디는 알파벳과 _ 을 포함한 3~12 자리로 입력해주세요.'],
        name : [/.+/, '이름을 제대로 입력해주세요.'],
        email : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, '유효하지 않는 이메일 양식입니다']
    },
    user : {
        name : [/.+/, '이름을 제대로 입력해주세요.'],
        pw : [/.{8,16}/, '비밀번호는 8~16자리로 설정해주세요.'],
        pwConfirm : [/.{8,16}/, '비밀번호는 8~16자리로 설정해주세요.'],
        id : [/[a-zA-Z0-9_]{3,12}/, '아이디는 알파벳과 _ 3~12 자리로 설정해주세요.'],

        email : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, '유효하지 않는 이메일 양식입니다']
    },
    
    restaurant : {
        name : [/.+/, '식당 이름을 제대로 입력해주세요.'],
        address : [/.+/, '식당 주소를 제대로 입력해주세요.'],
        phoneNumber : [/^\d{2,3}-\d{3,4}-\d{4}$/, '올바르지 않은 전화 번호입니다.'],
        description : [/.+/, '식당 설명을 입력해주세요.']
    },
    isValid(context, list) {
        for(var key in context) {
            if(list[key]) {
                let [valid, message] = list[key];
                let isValid = false;
                if(typeof(valid) == 'function') {
                    isValid = valid(context[key]);
                }
                else if(valid.test) {
                    isValid = valid.test(context[key]);
                }
                if(!isValid) {
                    alert(message);
                    return false;
                }
            }
        }
        return true;
    }
}