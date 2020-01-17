const KEY = "user_list";

export function getUserListFromCache() {
  const list = localStorage.getItem(KEY);

  if (list) {
    return JSON.parse(list); // returns ["pawel", "luke"]
  }

  return [];
}

export function saveUserListToCache(userList) {
  localStorage.setItem(KEY, JSON.stringify(userList));
}
