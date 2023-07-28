import { Component } from "@angular/core";
import { Menu } from "../../../data/types";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styles: [],
})
export class LayoutComponent {
  opened = true;
  year = new Date().getFullYear();

  menu: Menu = [
    /* {
       title: "Account Manager",
       icon: "badge",
       subMenu: [
         {
           title: "View Product",
           icon: "domain",
           link: "/app/products",
           active: true,
         },

         {
           title: "Product Details",
           icon: "domain",
           link: "/app/account/details",
           active: true,
         },
       ],
       active: true,
     },*/

    /*{
      title: "Merchant Manager",
      icon: "forum",
      subMenu: [
        {
          title: "View Merchants",
          icon: "chat_bubble",
          link: "/app/merchants",
          active: true,
        },
      ],
      active: true,
    },*/

    /*{
      title: "Category Manager",
      icon: "badge",
      subMenu: [
        {
          title: "View Product",
          icon: "domain",
          link: "/app/products",
          active: true,
        },

        {
          title: "Product Details",
          icon: "domain",
          link: "/app/account/details",
          active: true,
        },
      ],
      active: true,
    },*/

    /* {
       title: "Product Manager",
       icon: "badge",
       subMenu: [
         {
           title: "View Product",
           icon: "domain",
           link: "/app/products",
           active: true,
         },

         {
           title: "Product Details",
           icon: "domain",
           link: "/app/account/details",
           active: true,
         },
       ],
       active: true,
     },*/
    /*{
      title: "Payment Manager",
      icon: "forum",
      subMenu: [
        {
          title: "View Merchants",
          icon: "chat_bubble",
          link: "/app/messages/send",
          active: true,
        },
      ],
      active: true,
    },*/
    /*{
      title: "Tarrif Manager",
      icon: "forum",
      subMenu: [
        {
          title: "View Merchants",
          icon: "chat_bubble",
          link: "/app/messages/send",
          active: true,
        },
      ],
      active: true,
    },*/

    /* {
       title: "Currency Manager",
       icon: "forum",
       subMenu: [
         {
           title: "View Merchants",
           icon: "chat_bubble",
           link: "/app/messages/send",
           active: true,
         },
       ],
       active: true,
     },*/

    {
      title: "Reports",
      icon: "description",
      subMenu: [
        {
          title: "Transaction Summary",
          icon: "summarize",
          //link: "/app/reports/transaction-logs",
          link: "/reports/transaction-logs",
          active: true,
        },
      ],
      active: true,
    },

    {
      title: "Bulk Resolution",
      icon: "forum",
      subMenu: [
        {
          title: "Upload file",
          icon: "chat_bubble",
          link: "/bulk-resolutions/upload-batch",
          active: true,
        },
      ],
      active: true,
    },
  ];
  auth: any;

  constructor() {}
}
