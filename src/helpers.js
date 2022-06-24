// const API = process.env.ORIGIN || 'https://magenta-cendol-be6ad4.netlify.app';

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
