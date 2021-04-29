import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopularMoviesTopFive from "../content/popular-movies-landing";
import TopRatedMovies from "../content/top-rating-movies";
import UserComment from '../content/comment/user-comment';

const HomeScreen = ({ auth: { isAuthenticated, user } }) => {
  return (
    <section className='landing'>
      <div className=''>
        <div className='landing-inner'>
          <div className='landing-inner-text'>
            <h1 className='x-large'>MovieDB Search</h1>
            <p className='lead'>
              Welcome.
            <br></br>Millions of movies, TV shows and people to discover. Explore now.
          </p>
          </div>
          <div>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
        {
          isAuthenticated &&
          <>
            <UserComment userId={user._id}/>
              <TopRatedMovies />
          </>
        }
        {
              !isAuthenticated &&
              <PopularMoviesTopFive />
            }

          </div>
    </section>
  );
};

HomeScreen.propTypes = {
        isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HomeScreen);
