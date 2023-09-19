import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  constructor() { }

  async listPost(data: any) {

    const html = {
      get(element: any) {
        return document.querySelector(element)
      }

    }

    let perPage = 2
    const state = {
      page: 1,
      perPage,
      totalPage: Math.ceil(data.length / perPage),
      maxVisibleButtons: 2
    }

    const controls = {

      next() {
        state.page++

        const lastPage = state.page > state.totalPage

        if (lastPage) {
          state.page--
        }

      },
      prev() {
        state.page--

        if (state.page < 1) {
          state.page++
        }
      },
      goTo(page: any) {
        if (page < 1) {
          page = 1
        }
        state.page = +page;
        if (page > state.totalPage) {
          state.page = state.totalPage
        }
      },
      createListeners() {
        html.get(".last").addEventListener("click", () => {
          controls.next();
          update();

        })

        html.get(".first").addEventListener("click", () => {
          controls.prev();
          update();

        })

      }


    }

    const list = {
      create(item: any) {
        const div = document.createElement("div");
        div.classList.add("item");
        const h3 = document.createElement("h3");
        h3.innerHTML = item.title;
        const p = document.createElement("p");
        p.innerHTML = item.body;
        html.get(".list").appendChild(div);
        html.get(".list").appendChild(h3);
        html.get(".list").appendChild(p);
      },
      update() {
        html.get(".list").innerHTML = "";

        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        const paginatedItems = data.slice(start, end);
        paginatedItems.forEach(list.create);

      }
    }

    const buttons = {
      create(number: number) {
        const button = document.createElement('div');
        button.innerHTML = String(number);
        console.log(number);
        if (state.page == number) {
          button.classList.add('active');
        }
        button.addEventListener('click', (event) => {
          const element: HTMLElement = event.target as HTMLElement;
          const page = element.innerText;
          controls.goTo(page);
          update();
        })
        html.get('.numbers').appendChild(button);

      },
      update() {
        html.get(".controls .numbers").innerHTML = "";
        const { maxLeft, maxRight } = buttons.calculateMaxVisible();

        for (let page = maxLeft; page <= maxRight; page++) {
          console.log(maxLeft, " ", maxRight);
          buttons.create(page);
        }
      },
      calculateMaxVisible() {
        const { maxVisibleButtons } = state;
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));
        if (maxLeft < 1) {
          maxLeft = 1;
          maxRight = maxVisibleButtons;
        }
        if (maxRight > state.totalPage) {
          maxLeft = state.totalPage - (maxVisibleButtons - 1);
          maxRight = state.totalPage;

          if (maxLeft < 1) maxLeft = 1

        }

        return { maxLeft, maxRight }

      }
    }


    function update() {
      list.update();
      buttons.update();

    }

    function init() {
      list.update();
      controls.createListeners();
    }
    init();

  }

}
