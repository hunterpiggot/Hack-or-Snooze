function hidePageComponents() {
    const components = [
      $storiesLists,
      $submitForm,
      $loginForm,
      $signupForm,
      $userProfile
    ];
    components.forEach(c => c.hide());
  }
  
function navFavoritesClick(evt) {
    console.debug("navFavoritesClick", evt);
    hidePageComponents();
    putFavoritesListOnPage();
  }
  