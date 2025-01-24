import React, {  useEffect, useState, 
  // useEffect
 } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-flatpickr";
import logger from "sabio-debug";
import toastr from "toastr";
import PropTypes from "prop-types";
import usersProfileService from "services/userProfileService";

const _logger = logger.extend("userProfile");

const validationSchema = Yup.object().shape({
  pregnancyDate: Yup.string(),
  nutrition: Yup.string().required("Nutrition is required"),
  height: Yup.string().required("Height is required"),
  weight: Yup.string().required("Weight is required"),
});

function UserProfileForm(props) {
  _logger(props,"props")
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);
  const [pDate, setPDate] = useState(false);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const showSupplements = (e) => {
    if (e.target.id === "gridRadios1") {
      setShow(() => {
        return true;
      });
    } else {
      setShow(() => {
        return false;
      });
    }
  };

  const showDate = (e) => {
    _logger(e.target.id);

    if (e.target.id === "radioYes") {
      setPDate(() => {
        return true;
      });
    } else {
      setPDate(() => {
        return false;
      });
    }
  };

const onSubmitSuccess=(response)=>{
_logger("success",response)
toastr.success('Form submitted successfully!', {
  // position: toast.POSITION.TOP_RIGHT
});
}

const onSubmitError=(response)=>{
  _logger("error",response)
  }
  useEffect(()=>{

usersProfileService.getById(props.currentUser.id).then(onGetByIdSuccess).catch(onGetByIdError)

  },[])

function onGetByIdSuccess(response) {
  _logger(response,"onGetByIdSuccess")
}
function onGetByIdError(response) {
  _logger(response,"onGetByIdError")
}

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          pregnancyQuestion: "",
          pregnancyDate: "",
          nutrition: "",
          height: "",
          weight: "",
          check: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
        values.relationship=parseInt(values.relationship)
        values.Age=parseInt(values.Age)
        _logger(values)
          usersProfileService.add(values).then(onSubmitSuccess).catch(onSubmitError)

          setTimeout(() => {
            _logger(values, "hhhhhhhh");

          

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row>
              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="formPregnancyQuestion">Are you pregnant?</label>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onClick={showDate}
                      type="radio"
                      id="radioYes"
                      name="exampleRadios"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onClick={showDate}
                      type="radio"
                      name="exampleRadios"
                      id="radioNo"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      No
                    </label>
                  </div>
                </div>
              </Col>
              {pDate && (
                <Col md={6} sm={12} className="form-control mb-3">
                  <label htmlFor="formPregnancyDate">Pregnancy Due Date</label>
                  <div className="container">
                    <label>Select Date:</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleChange}
                      className="form-group mx-sm-3 mb-2"
                    />
                  </div>
                </Col>
              )}

              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="SupplementsQuestion">
                  Are you taking any supplements?
                </label>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      onClick={showSupplements}
                      id="gridRadios1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Yes
                    </label>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      onClick={showSupplements}
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      No
                    </label>
                    {show && (
                      <div className="form-group">
                        <Field
                          type="text"
                          name="supplements"
                          className="form-control"
                          id="supplements"
                          placeholder="Please list any supplements you may be taking"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="formNutrition">Nutrition</label>
                <Field
                  type="text"
                  name="nutrition"
                  className="form-control"
                  id="nutrition"
                  placeholder="Please enter the main 5 meals you eat per day"
                />
              </Col>

              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="formNutrition">Age</label>
                <Field
                  type="text"
                  name="Age"
                  className="form-control"
                  id="Age"
                  placeholder="Age"
                />
              </Col>

              <Col md={12} sm={12} className="mb-3">
                <label htmlFor="formRelationshipStatus">
                  Relationship Status
                </label>
                <Field
                  as="select"
                  name="relationship"
                  className="form-control custom-select my-1 mr-sm-2"
                  id="relationship"
                >
                  <option value="">Select</option>
                  <option value={1}>Single</option>
                  <option value={2}>
                    Boyfriend/Girlfriend
                  </option>
                  <option value={3}>Married</option>
                  <option value={4}>Engaged</option>
                  <option value={5}>Divorced</option>
                </Field>
              </Col>

              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="formHeight">Height</label>
                <Field
                  type="text"
                  name="height"
                  className="form-control"
                  id="height"
                  placeholder="Height ex.5.4"
                />
              </Col>

              <Col md={6} sm={12} className="form-control mb-3">
                <label htmlFor="formWeight">Weight</label>
                <Field
                  type="text"
                  name="weight"
                  className="form-control"
                  id="weight"
                  placeholder="Weight .lbs "
                />
              </Col>

              <Col sm={12} md={12}>
                <Button variant="primary" type="submit">
                  {isSubmitting ? "Submitting" : "Submit"}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
UserProfileForm.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number,
  })
};
export default UserProfileForm;
