import { randomInt } from 'crypto'
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql'
import { Context } from '../context'
import { Photo } from '../model/Photo'

@InputType()
class AddPhotoDto {
  @Field()
  url: string
  @Field()
  label: string
}

@Resolver(Photo)
export class PhotoResolver {
  @Query(() => [Photo])
  async photos(
    @Arg('size') size: number,
    @Arg('position') position: number,
    @Ctx() { prisma }: Context
  ) {
    let data = await prisma.photo.findMany({
      skip: size * position,
      take: size,
    })

    if (data.length === 0) {
      data = await prisma.photo.findMany({
        take: size,
      })
    }

    while (data.length < size) data.push(data[randomInt(data.length)])

    return data
  }

  @Mutation(() => Photo)
  async addPhoto(
    @Arg('photo') { label, url }: AddPhotoDto,
    @Ctx() { prisma }: Context
  ) {
    return prisma.photo.create({
      data: {
        url,
        label,
        createdAt: new Date(),
      },
    })
  }
}
