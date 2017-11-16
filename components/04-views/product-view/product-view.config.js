module.exports = {
  context: {
    breadcrumbs: {
      class: 'product-view__breadcrumbs',
      categories: [
        {
          name: 'Home',
          href: '#',
          ariaLabel: 'Breadcrumb Home'
        },
        {
          name: 'Women',
          href: '#',
          ariaLabel: 'Breadcrumb Women'
        },
        {
          name: 'Tops',
          href: '#',
          ariaLabel: 'Breadcrumb Tops'
        },
        {
          name: 'Jackets',
          href: '#',
          ariaLabel: 'Breadcrumb Jackets'
        },
      ]
    },
    title: 'Ingrid Running Jacket with Long Sleaves',
    sku: {
      label: 'SKU',
      value: 'WSH09'
    },
    price: '$ 200.00',
    rating: {
      class: '',
      href: '#',
      value: '34',
      parenthesis: true
    },
    addReview: {
      text: 'Add Your Review',
      href: '#',
      class: ''
    },
    stock: {
      html: 'In stock - only 5 left',
      outOfStock: false,
      alert: true
    },
    description: 'Limestone is currently on backorder - this item is available to ship on December 24th. <br/> Palladium is currently on backorder - this item is available to ship on January 3rd.',
    attributesTitle: 'For interion and exterior use.',
    sliderHeading: 'You may also like',
    button: {
      tag: 'button',
      class: 'product-view__button',
      attributes: 'type="button"',
      text: 'Add to Cart'
    },
    listIcon: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'list--with-icon list--horizontal product-view__list',
      elements: [
        {
          iconClass: 'product-view__icon',
          icon: 'facebook'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'pinterest'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'instagram'
        },
        {
          iconClass: 'product-view__icon',
          icon: 'mail'
        }
      ]
    },
    tab: {
      class: 'product-view__tab',
      tabs: [
        {
          tabId: 'tab-1',
          title: 'Details',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis sit amet quam id vestibulum. Nunc faucibus quam non venenatis laoreet. Pellentesque eu feugiat tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          class: 'tab__title--active',
          contentClass: 'tab__content--active',
          table: {
            class: 'product-view__table',
            mainTags: [
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'SKU'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'LENGTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'WIDTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'HEIGTH'
                      },
                      {
                        childTag: 'td',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          tabId: 'tab-2',
          title: 'More information',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          tabId: 'tab-3',
          title: 'Reviews (34)',
          content: 'Pellentesque velit nisl, posuere ac erat nec, iaculis auctor magna. Donec ut elementum mauris. Sed in scelerisque lorem. Cras pretium laoreet vestibulum. In dui mauris, sagittis vitae rhoncus quis, ornare in enim. Vivamus pellentesque ligula sed quam sollicitudin lobortis. Etiam interdum euismod nisi a interdum. Nunc turpis urna, pharetra nec nunc sit amet, consequat porta orci. Suspendisse sit amet dignissim lacus. Quisque vel est pretium, aliquam lacus id, lobortis neque. Nullam non neque mi. Vivamus quis pulvinar mi, in elementum nulla. Etiam neque diam, suscipit vitae luctus et, sollicitudin in turpis. Proin vitae cursus augue, sit amet vestibulum mi. Mauris feugiat justo eget purus fringilla aliquam vitae a massa.'
        }
      ]
    },
    slider: {
      class: 'product-view__slider',
      iconPrev: 'arrow-left',
      iconNext: 'arrow-right',
      iconClass: 'slider__icon',
      products: [
        {
          product: {
            image: {
              src: '/images/produkt-image.png'
            },
            class: 'slider__item',
            tag: 'div',
            name: 'Some product name',
            price: '$ 200.00'
          }
        },
        {
          product: {
            image: {
              src: '/images/produkt-image.png'
            },
            class: 'slider__item',
            tag: 'div',
            name: 'Some product name',
            price: '$ 200.00'
          }
        },
        {
          product: {
            image: {
              src: '/images/produkt-image.png'
            },
            class: 'slider__item',
            tag: 'div',
            name: 'Some product name',
            price: '$ 200.00'
          }
        },
        {
          product: {
            image: {
              src: '/images/produkt-image.png'
            },
            class: 'slider__item',
            tag: 'div',
            name: 'Some product name',
            price: '$ 200.00'
          }
        },
        {
          product: {
            image: {
              src: '/images/produkt-image.png'
            },
            class: 'slider__item',
            tag: 'div',
            name: 'Some product name',
            price: '$ 200.00'
          }
        }
      ]
    }
  }
};
