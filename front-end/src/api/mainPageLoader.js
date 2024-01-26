import { BACK_END_URL } from "../constants/api";

const menPromise = fetch(`${BACK_END_URL}/men`).then((res) => res.json());
const womenPromise = fetch(`${BACK_END_URL}/women`).then((res) => res.json());

export async function mainPageLoader() {
  return Promise.all([menPromise, womenPromise]).then(
    ([menPromise, womenPromise]) => {
      return [menPromise.bestsellers, womenPromise.bestsellers];
    }
  );
}
