import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url)
      return data
    } catch (error) {
      throw new Error(`This in an error - Check logs`)
    }
  }

  // async post<T>(url: string, data: any): Promise<T> {
  //   return await axios.post<T>(url, data)
  // }

  // async put<T>(url: string, data: any): Promise<T> {
  //   return await axios.put<T>(url, data)
  // }

  // async delete<T>(url: string): Promise<T> {
  //   return await axios.delete<T>(url)
  // }
}