import {getHomePage, reviewProduct, getWhoami} from '../Apis/homePageApi.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import http from 'k6/http';
import { sleep } from "k6";
import { group } from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
        contacts: {
          executor: 'per-vu-iterations',
          vus: 10,
          iterations: 20,
          maxDuration: '5m',
      },
    },
  };
  
  export default function () {
    
    group('Home page opening', () => { 
     getHomePage();
     getWhoami();
    });
    group('Review product', () => {reviewProduct();});

    sleep(5); 
  }

  export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }