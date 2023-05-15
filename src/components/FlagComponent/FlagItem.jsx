/** @format */

import React, { useEffect } from "react"

import Card from "react-bootstrap/Card"
import "./FlagItem.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectedCountry } from "../../redux/action"

const FlagItem = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const setCountry = useSelector((state) => state.setCountry.selectedCountry)

  const { country } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // function to if selectedCountry is null dipatch 1st item in countries array
  // navigate to display page
  // else dispatch selectedCountry
  // navigate to display page

  // const handleCountry = async () => {
  //   if (setCountry === null) {
  //     await dispatch(selectedCountry(country))
  //     await navigate(`/${country.flag}`)
  //   } else {
  //     await dispatch(selectedCountry(country))
  //     await navigate(`/${country.flag}`)
  //   }
  // }

  useEffect(() => {
    // console.log(country)
  }, [country])

  return (
    <div className='flag-item col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
      <Card
        onClick={async () => {
          await dispatch(selectedCountry(country))
          await navigate(`/${country.name.common}`)
        }}
        // onClick={handleCountry}
        className={
          !themeColor
            ? "flag-card col-9  mx-auto flag-card-dark"
            : "flag-card col-9  mx-auto flag-card-light"
        }>
        {country.flags.png ? (
          <Card.Img
            variant='top'
            src={country.flags.png}
            className='flag-card-image'
          />
        ) : (
          ""
        )}

        <Card.Body>
          <Card.Title className='fw-bold text-truncate'>
            {country.name.common}
          </Card.Title>
          <Card.Text>
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold'> Population : </span>
              <span>{country.population}</span>
            </small>
            <br />
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold'>Region : </span>
              <span>{country.region}</span>
            </small>
            <br />
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold '>Capital : </span>
              <span className='text-truncate'>
                {country.capital && country.capital.length > 0
                  ? country.capital[0]
                  : "No Capital"}
              </span>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default FlagItem
