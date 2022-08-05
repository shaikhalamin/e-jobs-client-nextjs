const API_BASE = "http://localhost:3000";
const API_UPLOADS = `${API_BASE}/uploads`;
const API_URLS = {
    base_url: API_BASE,
    users: {
        base: '/users'
    },
    compaies: {
        base: `${API_BASE}/companies`,
        api_uploads: `${API_UPLOADS}/companies`
    },
    job_circulars: {
        base: `${API_BASE}/jobs-circulars`
    }
}

export default API_URLS;