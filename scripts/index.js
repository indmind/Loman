$(document).ready(() => {
  $(document).scroll(() => {
    console.log("scrolled")
    const $nav = $("#main-navbar");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
