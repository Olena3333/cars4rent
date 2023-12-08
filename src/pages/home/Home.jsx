import { StyledContainer } from "../../helpers/Container.styled";
import {
  StyledAdvantagesIcon,
  StyledAdvantagesList,
  StyledAdvantagesListItem,
  StyledAdvantagesTitle,
  StyledForYouIcon,
  StyledForYouList,
  StyledForYouListItem,
  StyledHeroTitle,
  StyledRentalCarBtn,
  StyledSectionAdvantages,
  StyledSectionForYou,
  StyledSectionHero,
} from "./Home.Styled";
import sprite from "../../img/svg/sprite.svg";

const Home = () => {
  return (
    <div>
      <StyledSectionHero>
        <StyledHeroTitle>Rental Car in Ukraine</StyledHeroTitle>
        <StyledRentalCarBtn type="button">Rental car</StyledRentalCarBtn>
      </StyledSectionHero>
      <StyledSectionAdvantages>
        <StyledContainer>
          <StyledAdvantagesTitle>Our Advantages</StyledAdvantagesTitle>
          <StyledAdvantagesList>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="20" height="20">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                We offer a vast selection of cars for rent, as on the RENTAL
                site you can choose from more than 250 cars. Thanks to this, you
                can select a specific car you would like to drive and not a car
                class.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="20" height="20">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Only new cars - all cars for rent that we offer our customers
                are not older than three years.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="20" height="20">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Wide price range and constant actions and discounts on car
                rental services. At the RENTAL site, everyone can find a car for
                rent that suits him in terms of the price and conditions of the
                lease. All prices are listed on the site: no hidden or extra
                fees. We have a separate loyalty program for regular customers.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Rent a car in a few clicks. Choose the car you need, the period
                you want to rent a car, and leave your contact phone number. Our
                operator will contact you within several minutes to elaborate on
                the details and confirm the car rental order.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Car rental services work 24/7 without holidays and weekends. Our
                managers are ready to help you rent a car at any time of the day
                or night.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Targeted delivery of the rented car. You do not need to go
                somewhere to rent a car.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Delivery of cars to any place in Ukraine. You do not need to
                come to the office to rent a car. All you need is just to name
                the delivery address. A car will be waiting for you at a
                specified time, even in Ukrainian cities where our car rental
                branches are not yet available.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                We take care of our clients' time. Even the car rental process
                without a deposit at the company RENTAL takes 5-10 minutes,
                after which you receive the keys and a full tank.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Concierge Service. In addition to the car rental itself, our
                services include 24-hour support for any questions. We are ready
                to help you with hotel reservations, searching for items you
                need, and making restaurant reservations. We can even help feed
                pets left at home.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                Technical support 24/7. No matter what happens on the road,
                whether it's a punctured tire or a dead battery, our experts are
                always ready to solve any technical issues related to the car.
              </p>
            </StyledAdvantagesListItem>
            <StyledAdvantagesListItem>
              {/* <StyledAdvantagesIcon width="15" height="15">
                <use href={`${sprite}#icon-pencil`} />
              </StyledAdvantagesIcon> */}
              <p>
                A fully equipped and sanitized car for rent that undergoes
                regular maintenance.
              </p>
            </StyledAdvantagesListItem>
          </StyledAdvantagesList>
        </StyledContainer>
      </StyledSectionAdvantages>

      <StyledSectionForYou>
        <StyledContainer>
          <StyledAdvantagesTitle>It's available for you</StyledAdvantagesTitle>
          <StyledForYouList>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-file-text2`} />
              </StyledForYouIcon>
              <h3>Car insurance</h3>
              <p>
                Travel safely – we handle all risks on our own. All of our cars
                have valid insurance policies.
              </p>
            </StyledForYouListItem>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-location`} />
              </StyledForYouIcon>
              <h3>GPS-navigation</h3>
              <p>
                Never get lost and save time with the GPS-navigation device
                which will calculate the best route for you.
              </p>
            </StyledForYouListItem>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-accessibility`} />
              </StyledForYouIcon>
              <h3>Child safety sea</h3>
              <p>
                Traveling with children? Take care of their safety with a
                comfortable child seat.
              </p>
            </StyledForYouListItem>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-connection`} />
              </StyledForYouIcon>
              <h3>Wi-Fi</h3>
              <p>
                Stay connected and in touch with all goings-on with a high-speed
                Wi-Fi Internet.
              </p>
            </StyledForYouListItem>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-wrench`} />
              </StyledForYouIcon>
              <h3>Concierge service</h3>
              <p>
                Round-the-clock support with any questions, be it hotel
                reservations or finding the best tours and products.
              </p>
            </StyledForYouListItem>
            <StyledForYouListItem>
              <StyledForYouIcon width="40" height="40">
                <use href={`${sprite}#icon-headphones`} />
              </StyledForYouIcon>
              <h3>Assistance on the road</h3>
              <p>
                Need help replacing a broken wheel? The battery has to be
                charged? Get in touch with us and our team will arrive to help
                you on the road.
              </p>
            </StyledForYouListItem>
          </StyledForYouList>
        </StyledContainer>
      </StyledSectionForYou>
    </div>
  );
};

export default Home;
