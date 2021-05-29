export const isAdmin = (roles) => {
  if (roles.indexOf("AdminUser") !== -1) {
    return true;
  } else {
    return false;
  }
};
