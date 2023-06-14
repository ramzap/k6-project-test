import http from 'k6/http';
import { check } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

const baseUrl = 'https://juice-shop.herokuapp.com';
const randomNumber = randomIntBetween(1,30);
export default function() {

}

export function getHomePage(){
    const response = http.get(baseUrl, 
         {tags: { page: 'Homepage' }
         });
    check(response, 
        {'Status should be 200': (r) => r.status === 200}, { page: 'Homepage' }
        );
    }
  
export function reviewProduct(){

    const response = http.get(`${baseUrl}/rest/products/${randomNumber}/reviews`);
    check(response, 
        {'Status should be 200': (r) => r.status === 200}
        );
    }

export function getWhoami(){
    const response = http.get(`${baseUrl}/rest/user/whoami`);
    check(response, 
        {'Status should be 200': (r) => r.status === 200}
        );
}

