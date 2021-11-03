import React from 'react'
import {render,unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import {CountryLoading} from '../Components/Countries/country-loading'
let container = null
beforeEach(()=>{
    container = document.createElement('div')
    document.body.appendChild(container)
})
afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container = null
})
test('renders with or without a country name',()=>{
    act(()=>{
        render(<CountryLoading countryName = "All"/>,container)
    });
    expect(container.textContent).toBe('Loading for Countries please wait...')
    act(()=>{
        render(<CountryLoading countryName = 'Ethiopia'/>,container)
    });
    expect(container.textContent).toBe('Loading for Ethiopia please wait...')
})