const BaseUrl = process.env.REACT_APP_BASE_URL;

export const createResume_api = `${BaseUrl}/api/resume/create`;
export const updateResume_api = (id: any) =>
  `${BaseUrl}/api/resume/update-section/${id}`;

export const getResume_api = (id: any) => `${BaseUrl}/api/resume/${id}`;


export const importResume_api = `${BaseUrl}/api/resume/import`;
export const userResumes_api = `${BaseUrl}/api/resume/user`;
