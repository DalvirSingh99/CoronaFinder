// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DemographicsForm from '../components/demographics_form'
import TraigeComponent from '../components/traige_component'
import { injectIntl, intlShape, IntlProvider } from 'react-intl';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <IntlProvider locale="en">
    <DemographicsForm/>
    </IntlProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
