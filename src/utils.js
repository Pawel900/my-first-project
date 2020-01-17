const KEY = "user_list";

export function getUserListFromCache() {
  const list = localStorage.getItem(KEY);
  if (list) {
    return JSON.parse(list);
  }

  return [];
}

export function saveUserListCache(userList) {
  localStorage.setItem(KEY, JSON.stringify(userList));
}
