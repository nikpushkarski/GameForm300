export const myCount = function () {
  const checkedPoints = $("input:checked").length;
  $("#output_field").html(
    "Выбрано " +
      checkedPoints +
      " из " +
      $(".checkbox-wrapper").length +
      " серий игр (" +
      ((checkedPoints / $(".checkbox-wrapper").length) * 100).toFixed(0) +
      "%)"
  );
};

export const updateStorage = function (e) {
  const checkbox = e.target;
  const checkboxId = e.target.id;
  const checkedState = e.target.checked;
  const checkboxInStorage = localStorage.getItem(checkboxId);

  if (checkedState == false && checkboxInStorage) {
    localStorage.removeItem(e.target.id);
  } else if (checkedState == true && !checkboxInStorage) {
    localStorage.setItem(checkboxId, checkedState);
  }
};

export const setCheckboxes = function () {
  const allItems = Object.keys(localStorage);
  allItems.forEach((item) => {
    if (item.match("gameForm300Check-[0-9]*")) {
      document.getElementById(item).checked = true;
    }
  });
};

export const selectAll = function () {
  const allCheckboxes = $("input").toArray();
  console.log("setAll");
  allCheckboxes.forEach((e) => {
    e.checked = true;
    localStorage.setItem(e.id, e.checked);
  });
  myCount();
};

export const clearAll = function () {
  const allCheckboxes = $("input").toArray();
  console.log("clearAll");
  allCheckboxes.forEach((e) => {
    e.checked = false;
    localStorage.removeItem(e.id);
  });
  myCount();
};
