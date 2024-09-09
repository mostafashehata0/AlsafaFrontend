import { Injectable } from '@angular/core';
import sanityClient, { createClient, SanityClient } from '@sanity/client';
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient | undefined;

  constructor() {
    try {
      this.initializeClient();
    } catch (error) {
      console.error('Failed to initialize Sanity client:', error);
    }
  }

  // Method to initialize the client with the token from environment
  private initializeClient() {
    if (!environment.sanityToken) {
      throw new Error('Sanity token is missing in environment variables');
    }

    this.client = createClient({
      projectId: '94n3zxuh',
      dataset: 'production',
      apiVersion: '2023-01-01',
      token: environment.sanityToken,
      useCdn: false,
      withCredentials: false,
      ignoreBrowserTokenWarning: true,
    });
  }

  // ==========================Method to fetch news data
  fetchNewsData(): Promise<any> {
    if (!this.client) {
      return Promise.reject('Sanity client is not initialized');
    }

    const query = `*[_type == "news"]{
      _id,
      title,
      description,
      image[]{
        asset->{
          _id,
          url
        }
      }
    }`;

    return this.client
      .fetch(query)
      .then((data: any) => {
        return data;
      })
      .catch((error: any) => {
        console.error('Error fetching News data:', error);
        throw error;
      });
  }
  //====================== method to featch clients data
  fetchClientsData(): Promise<any> {
    if (!this.client) {
      return Promise.reject('Sanity client is not initialized');
    }

    const query = `*[_type == "clients"]{
      _id,
      title,
      image[]{
        asset->{
          _id,
          url
        }
      }
    }`;

    return this.client
      .fetch(query)
      .then((newsData: any) => {
        return newsData;
      })
      .catch((error: any) => {
        console.error('Error fetching clientsData :', error);
        throw error;
      });
  }
}
