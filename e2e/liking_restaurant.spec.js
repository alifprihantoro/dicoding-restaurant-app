// eslint-disable-next-line no-undef
Feature('Liking Restaurant')

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#')
  // eslint-disable-next-line no-undef
  I.click('#nav-favorite')
})

// eslint-disable-next-line no-undef
Scenario('showing empty love restaurant', ({ I }) => {
  I.seeElement('.warning')
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('anda belum memasukkan favorite restaurants')
  I.seeElement('a.btn')
  I.see('return to home')
})

// eslint-disable-next-line no-undef
Scenario('love one restaurant', async ({ I }) => {
  I.click('return to home', 'a.btn')
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.button-list-image').first()
  await I.grabTextFrom(firstRestaurant)
  I.see('LIST RESTAURANTS', '#title-list')
  // eslint-disable-next-line no-undef
  // await I.makeApiRequest('GET', 'https://restaurant-api.dicoding.dev/detail/rqdv5juczeskfw1e867')
  I.click(firstRestaurant)
  // eslint-disable-next-line no-undef
  const loveBtn = locate('#love-btn')
  await I.grabTextFrom(loveBtn)
  I.click(loveBtn)
  I.click('#nav-favorite')
  I.see('FAVORITE RESTAURANTS', '#title-list')
  I.seeElement('.detail-show')
})
