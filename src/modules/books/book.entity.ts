import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
@Table
export class Book extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  title: string;

  @Column
  author: string;

  @Column
  year_of_publication: number;
}