(function() {
  pageData = {
    currentPage: 1,
    pageSize: 4,
    buttonAmount: 5,
    maxPage: 4,
    screenUser: [],
    isLoadMore: true
  };

  document.myReady = callback => {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", callback, false);
    } else if (document.attachEvent) {
      document.attachEvent("onreadystatechange", () => {
        if (document.readyState == "interactive") {
          callback();
        }
      });
    } else {
      window.onload = callback;
    }
  };

  document.myReady(() => {
    //scroll and loadmor;
    loadMore();

    //handling rem for different screen size
    handleRem();

    //add page buttons on DOM tree
    buildPageButton();

    searchUser();

    //funtion for loading data
    loadData(
      { pageSize: pageData.pageSize, pageNumber: pageData.currentPage },
      false
    );

    //set navigation bar responsible
    let burger = document.querySelector(".burger");
    let nav = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });

    //set modal responsible
    let modal = document.getElementById("modal-add-employee");

    document.getElementById("add-button").addEventListener("click", () => {
      modal.style.display = "block";
    });

    document.getElementById("save-modal").addEventListener("click", () => {
      saveData = saveNewEmployee();

      //here to send HTTP Request to save new employess

      //set success message
      let modalSuccess = document.getElementById("model-add-success");
      modalSuccess.style.display = "block";
      document.getElementById("success-close").addEventListener("click", () => {
        modalSuccess.style.display = "none";
      });
      setTimeout(() => {
        modalSuccess.style.display = "none";
      }, 2000);

      console.log(saveData);
      modal.style.display = "none";
    });

    document.getElementById("close-modal").addEventListener("click", () => {
      modal.style.display = "none";
    });

    document.getElementById("cancel-modal").addEventListener("click", () => {
      modal.style.display = "none";
    });

    /**
     * @desc loading employee data and add data as DOM on DOM tree
     * @param pageParams {Object}   Data needed for AJAX HTTP Request, ex:{pageSize: 4, pageNumber: 1}
     * @param isAdd {Boolean}       True:Adding data after the exixting data; False: delete existing data then add new data
     * @ignore created              2019-12-19
     * @return result {null}
     */
    function loadData(pageParams, isAdd) {
      let employeeList = document.getElementById("emplpoyee-list");
      document.getElementById("error").style.display = "none";
      ajaxRequest("get", "https://emplistapi-258220.appspot.com/", pageParams)
        .then(function(data) {
          let innerHTML = createUser(data);
          if (isAdd) {
            pageData.screenUser = pageData.screenUser.concat(data);
            employeeList.innerHTML += innerHTML.join("");
          } else {
            pageData.screenUser = data;
            employeeList.innerHTML = innerHTML.join("");
          }
        })
        .catch(function(err) {
          if (err == 0) {
            document.getElementById("error").style.display = "block";
          }
        });
    }

    /**
     * @desc Sending AJAX HTTP Request
     * @param method {Object}   Data needed for AJAX HTTP Request
     * @param url {Boolean}     Request URL
     * @param data {Boolean}    Data neede for sending AJAX Request, ex:{pageSize: 4, pageNumber: 1}
     * @ignore created          2019-12-19
     * @return result {Promise}
     */
    function ajaxRequest(method, url, data) {
      //compatible for IE
      var request;
      if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
      } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //create promise for return
      return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              resolve(JSON.parse(request.response));
            } else {
              reject(request.status);
            }
          }
        };
        if (method.toUpperCase() === "GET") {
          var arr = [];
          for (var key in data) {
            arr.push(key + "=" + data[key]);
          }
          if (arr.length == 0) {
            request.open("GET", url, true);
            request.send();
          } else {
            var getData = arr.join("&");
            request.open("GET", url + "?" + getData, true);
            request.send(null);
          }
        } else if (method.toUpperCase() === "POST") {
          request.open("POST", url, true);
          request.responseType = "json";
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
          request.send(data);
        }
      });
    }

    /**
     * @desc changing rem when screen size changes
     * @ignore created          2019-12-19
     * @return result {null}
     */
    function handleRem() {
      //handling rem to make web page responsive
      !(function(doc, win) {
        //getting html dom
        var docEle = doc.documentElement,
          evt =
            "onorientationchange" in window ? "orientationchange" : "resize",
          fn = function() {
            //getting screen size
            var width = docEle.clientWidth;
            width = width < 370 ? 370 : width;
            width = width > 1920 ? 1920 : width;
            width && (docEle.style.fontSize = 1000 * (width / 1920) + "px");
          };

        win.addEventListener(evt, fn, false);
        doc.addEventListener("DOMContentLoaded", fn, false);
      })(document, window);
    }

    /**
     * @desc build page buttons
     * @ignore created              2019-12-19
     * @return result {null}
     */
    function buildPageButton() {
      ajaxRequest("get", "https://emplistapi-258220.appspot.com/", {})
        .then(data => {
          let buttonWrap = document.getElementById("pagination-list");
          buttonWrap.innerHTML = "";
          let totalPageNumber = Math.ceil(data.length / 4);
          pageData.maxPage = totalPageNumber;
          buttons = [];
          //making buttons for data does not sufficient for 5 pages
          if (totalPageNumber <= 5) {
            for (var i = 1; i <= totalPageNumber; i++) {
              if (i == 1) {
                var str = `<li><a id="page1" class="pagination-link is-current" aria-label="Goto page 1" name=1>1</a></li>`;
              } else {
                var str = `<li><a id="page${i}" class="pagination-link" aria-label="Goto page ${i}" name=${i}>${i}</a></li>`;
              }
              buttons.push(str);
            }
          } else {
            //making buttons for data more than 5 pages
            let middlePageNumber = Math.ceil(totalPageNumber / 2);
            buttons.push(
              '<li><a id="page1" class="pagination-link is-current" aria-label="Goto page 1" name="1">1</a></li>'
            );
            buttons.push(
              '<li><span class="pagination-ellipsis" name="notpage">&hellip;</span></li>'
            );
            buttons.push(
              `<li><a class="pagination-link" aria-label="Goto page ${middlePageNumber -
                1}" name=${middlePageNumber - 1} >${middlePageNumber -
                1}</a></li>`
            );
            buttons.push(
              `<li><a class="pagination-link" aria-label="Goto page ${middlePageNumber}" name=${middlePageNumber}>${middlePageNumber}</a></li>`
            );
            buttons.push(
              `<li><a class="pagination-link" aria-label="Goto page ${middlePageNumber +
                1}" name=${middlePageNumber + 1}>${middlePageNumber +
                1}</a></li>`
            );
            buttons.push(
              '<li><span class="pagination-ellipsis" name="notpage">&hellip;</span></li>'
            );
            buttons.push(
              `<li><a class="pagination-link" aria-label="Goto page ${totalPageNumber}" name=${totalPageNumber}>${totalPageNumber}</a></li>`
            );
          }
          //add button DOMs on DOM tree
          buttonWrap.innerHTML += buttons.join("");

          //add click listener on buttons' parent DOM by using event propagation
          document
            .getElementById("pagination-list")
            .addEventListener("click", e => {
              //prevent other event trigger the page listener
              if (e.target.tagName != "A") return;
              if (e.target.name == "notpage") return;

              //add event Listener on page button
              document
                .getElementById(`page${pageData.currentPage}`)
                .classList.remove("is-current");
              pageData.currentPage = e.target.name;
              loadData(
                {
                  pageSize: pageData.pageSize,
                  pageNumber: e.target.name
                },
                false
              );
              document
                .getElementById(`page${pageData.currentPage}`)
                .classList.add("is-current");
            });

          //add listener to previous page button
          document
            .getElementById("page-previous")
            .addEventListener("click", () => {
              if (pageData.currentPage == 1) {
                loadData(
                  {
                    pageSize: pageData.pageSize,
                    pageNumber: pageData.currentPage
                  },
                  false
                );
              } else {
                document
                  .getElementById(`page${pageData.currentPage}`)
                  .classList.remove("is-current");
                pageData.currentPage = parseInt(pageData.currentPage) - 1;
                loadData(
                  {
                    pageSize: pageData.pageSize,
                    pageNumber: pageData.currentPage
                  },
                  false
                );
                document
                  .getElementById(`page${pageData.currentPage}`)
                  .classList.add("is-current");
              }
            });

          //add listener to next page button
          document.getElementById("page-next").addEventListener("click", () => {
            if (pageData.currentPage == pageData.maxPage) {
              loadData(
                {
                  pageSize: pageData.pageSize,
                  pageNumber: pageData.currentPage
                },
                false
              );
            } else {
              document
                .getElementById(`page${pageData.currentPage}`)
                .classList.remove("is-current");
              pageData.currentPage = parseInt(pageData.currentPage) + 1;
              loadData(
                {
                  pageSize: pageData.pageSize,
                  pageNumber: pageData.currentPage
                },
                false
              );
              document
                .getElementById(`page${pageData.currentPage}`)
                .classList.add("is-current");
            }
          });
        })
        .then()
        .catch(err => {
          console.log(err);
          if (err == 0) {
            document.getElementById("error").style.display = "block";
          }
        });
    }

    /**
     * @desc get new employee data to JSON
     * @ignore created              2019-12-19
     * @return result {JSON}
     */
    function saveNewEmployee() {
      let saveData = JSON.stringify({
        name: document.getElementById("name-add").value,
        email: document.getElementById("email-add").value,
        jobTitle: document.getElementById("job-title").value
      });
      return saveData;
    }

    /**
     * @desc load more data to web page when user scroll down
     * @ignore created              2019-12-19
     * @return result {null}
     */
    function loadMore() {
      window.onscroll = () => {
        if (!pageData.isLoadMore) {
          return;
        }
        let scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop;
        let pageHeight = document.body.clientHeight;
        let viewPortHeight = document.documentElement.clientHeight;

        let bottomHeight = pageHeight - scrollHeight - viewPortHeight;
        if (bottomHeight < 10) {
          loadData(
            { pageSize: pageData.pageSize, pageNumber: pageData.currentPage },
            true
          );
        }
      };
    }

    /**
     * @desc load more data to web page when user scroll down
     * @param data {Array}          a list of employees' information
     * @ignore created              2019-12-19
     * @return result {List}        return a list of DOM string
     */
    function createUser(data) {
      let innerHTML = [];
      data.forEach(element => {
        var str = `<li class="employee">
                <div class="employee-left">
                  <img
                    src="${
                      element.photoURL
                        ? element.photoURL
                        : "http://www.gravatar.com/avatar/d054b9616500a7f77de39b1f6caee8b5?s=200&r=pg&d=mm"
                    }"
                    alt="employee-image"
                    class="employee-image"
                  />
                </div>
                <div class="employee-right">
                  <h4>${element.name.first} ${element.name.last}</h4>
                  <span>${element.jobTitle ? element.jobTitle : "none"}</span>
                </div>
            </li>`;
        innerHTML.push(str);
      });
      return innerHTML;
    }

    /**
     * @desc Search employee by employee's name
     * @ignore created              2019-12-19
     * @return result {null}
     */
    function searchUser() {
      let searchInput = document.getElementById("search-input");
      searchInput.addEventListener("keyup", e => {
        pageData.isLoadMore = false;
        let final = pageData.screenUser.filter(item =>
          (item.name.first + item.name.last)
            .toLocaleLowerCase()
            .includes(e.target.value.replace(/\s/g, "").toLocaleLowerCase())
        );
        let innerHTML = createUser(final);
        let employeeList = document.getElementById("emplpoyee-list");
        employeeList.innerHTML = "";
        employeeList.innerHTML = innerHTML.join("");
        if (e.target.value.length == 0) {
          pageData.isLoadMore = true;
          loadData(
            { pageSize: pageData.pageSize, pageNumber: pageData.currentPage },
            false
          );
        }
      });
    }
  });
})();
