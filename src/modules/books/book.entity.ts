import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
@Table
export class Book extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column
  author: string;

  @Column
  year_of_publication: number;
}