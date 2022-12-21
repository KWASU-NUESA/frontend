import { createClient } from "next-sanity"
import { definePreview } from "next-sanity/preview"
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: "jf1b6gb7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false //change to true
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = definePreview(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

