const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

async function get(url) {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });

    if (!response.ok) throw new Error(`Error status: ${response.status}`);

    return response.json();
  } catch (err) {
    console.error(err);
    return;
  }
}

export async function getUsers() {
  const url = `${API_ENDPOINT}/users`;
  return get(url);
}

export async function getPosts(userId) {
  const url = `${API_ENDPOINT}/posts?userId=${userId}`;
  return get(url);
}

export async function getTodos(userId) {
  const url = `${API_ENDPOINT}/todos?userId=${userId}`;
  return get(url);
}

export async function getAlbums(userId) {
  const url = `${API_ENDPOINT}/posts?userId=${userId}`;
  return get(url);
}

export async function getPhotos(albumId) {
  const url = `${API_ENDPOINT}/photos?albumId=${albumId}`;
  return get(url);
}

export async function getComments(postId) {
  const url = `${API_ENDPOINT}/comments?postId=${postId}`;
  return get(url);
}
