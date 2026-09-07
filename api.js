export const API_BASE='https://mawaseel-backend.onrender.com';
export async function apiFetch(user,path,options={}){
  if(!user) throw Object.assign(new Error('not_authenticated'),{code:'not_authenticated'});
  const token=await user.getIdToken();
  const headers={'Content-Type':'application/json','Authorization':`Bearer ${token}`,...(options.headers||{})};
  const res=await fetch(API_BASE+path,{...options,headers});
  const data=await res.json().catch(()=>({}));
  if(!res.ok){const e=new Error(data.error||'api_error');e.code=data.error||'api_error';e.status=res.status;throw e}
  return data;
}
