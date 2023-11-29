import hero from "../../sanity/schemas/hero";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import React from 'react'

async function getData() {
  const query = "*[_type == 'hero'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <div>
        from hero
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <img src={urlFor(data.image).url()} alt="" />
    </div>
  );
}