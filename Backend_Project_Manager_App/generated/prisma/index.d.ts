
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model vote
 * 
 */
export type vote = $Result.DefaultSelection<Prisma.$votePayload>
/**
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>
/**
 * Model colonne
 * 
 */
export type colonne = $Result.DefaultSelection<Prisma.$colonnePayload>
/**
 * Model carte
 * 
 */
export type carte = $Result.DefaultSelection<Prisma.$cartePayload>
/**
 * Model categorie
 * 
 */
export type categorie = $Result.DefaultSelection<Prisma.$categoriePayload>
/**
 * Model carte_categorie
 * 
 */
export type carte_categorie = $Result.DefaultSelection<Prisma.$carte_categoriePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.voteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colonne`: Exposes CRUD operations for the **colonne** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colonnes
    * const colonnes = await prisma.colonne.findMany()
    * ```
    */
  get colonne(): Prisma.colonneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carte`: Exposes CRUD operations for the **carte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartes
    * const cartes = await prisma.carte.findMany()
    * ```
    */
  get carte(): Prisma.carteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.categorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carte_categorie`: Exposes CRUD operations for the **carte_categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carte_categories
    * const carte_categories = await prisma.carte_categorie.findMany()
    * ```
    */
  get carte_categorie(): Prisma.carte_categorieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    project: 'project',
    vote: 'vote',
    comment: 'comment',
    colonne: 'colonne',
    carte: 'carte',
    categorie: 'categorie',
    carte_categorie: 'carte_categorie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "vote" | "comment" | "colonne" | "carte" | "categorie" | "carte_categorie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      vote: {
        payload: Prisma.$votePayload<ExtArgs>
        fields: Prisma.voteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          findFirst: {
            args: Prisma.voteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          findMany: {
            args: Prisma.voteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          create: {
            args: Prisma.voteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          createMany: {
            args: Prisma.voteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          delete: {
            args: Prisma.voteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          update: {
            args: Prisma.voteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          deleteMany: {
            args: Prisma.voteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          upsert: {
            args: Prisma.voteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.voteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.voteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      colonne: {
        payload: Prisma.$colonnePayload<ExtArgs>
        fields: Prisma.colonneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.colonneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.colonneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          findFirst: {
            args: Prisma.colonneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.colonneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          findMany: {
            args: Prisma.colonneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>[]
          }
          create: {
            args: Prisma.colonneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          createMany: {
            args: Prisma.colonneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.colonneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>[]
          }
          delete: {
            args: Prisma.colonneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          update: {
            args: Prisma.colonneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          deleteMany: {
            args: Prisma.colonneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.colonneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.colonneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>[]
          }
          upsert: {
            args: Prisma.colonneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colonnePayload>
          }
          aggregate: {
            args: Prisma.ColonneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColonne>
          }
          groupBy: {
            args: Prisma.colonneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColonneGroupByOutputType>[]
          }
          count: {
            args: Prisma.colonneCountArgs<ExtArgs>
            result: $Utils.Optional<ColonneCountAggregateOutputType> | number
          }
        }
      }
      carte: {
        payload: Prisma.$cartePayload<ExtArgs>
        fields: Prisma.carteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          findFirst: {
            args: Prisma.carteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          findMany: {
            args: Prisma.carteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>[]
          }
          create: {
            args: Prisma.carteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          createMany: {
            args: Prisma.carteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>[]
          }
          delete: {
            args: Prisma.carteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          update: {
            args: Prisma.carteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          deleteMany: {
            args: Prisma.carteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>[]
          }
          upsert: {
            args: Prisma.carteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartePayload>
          }
          aggregate: {
            args: Prisma.CarteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarte>
          }
          groupBy: {
            args: Prisma.carteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarteGroupByOutputType>[]
          }
          count: {
            args: Prisma.carteCountArgs<ExtArgs>
            result: $Utils.Optional<CarteCountAggregateOutputType> | number
          }
        }
      }
      categorie: {
        payload: Prisma.$categoriePayload<ExtArgs>
        fields: Prisma.categorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findFirst: {
            args: Prisma.categorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findMany: {
            args: Prisma.categorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          create: {
            args: Prisma.categorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          createMany: {
            args: Prisma.categorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          delete: {
            args: Prisma.categorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          update: {
            args: Prisma.categorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          deleteMany: {
            args: Prisma.categorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          upsert: {
            args: Prisma.categorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.categorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      carte_categorie: {
        payload: Prisma.$carte_categoriePayload<ExtArgs>
        fields: Prisma.carte_categorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carte_categorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carte_categorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          findFirst: {
            args: Prisma.carte_categorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carte_categorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          findMany: {
            args: Prisma.carte_categorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>[]
          }
          create: {
            args: Prisma.carte_categorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          createMany: {
            args: Prisma.carte_categorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carte_categorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>[]
          }
          delete: {
            args: Prisma.carte_categorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          update: {
            args: Prisma.carte_categorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          deleteMany: {
            args: Prisma.carte_categorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carte_categorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carte_categorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>[]
          }
          upsert: {
            args: Prisma.carte_categorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carte_categoriePayload>
          }
          aggregate: {
            args: Prisma.Carte_categorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarte_categorie>
          }
          groupBy: {
            args: Prisma.carte_categorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<Carte_categorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.carte_categorieCountArgs<ExtArgs>
            result: $Utils.Optional<Carte_categorieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    project?: projectOmit
    vote?: voteOmit
    comment?: commentOmit
    colonne?: colonneOmit
    carte?: carteOmit
    categorie?: categorieOmit
    carte_categorie?: carte_categorieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    votes: number
    comments: number
    project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    project?: boolean | UserCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    votes: number
    comments: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | ProjectCountOutputTypeCountVotesArgs
    comments?: boolean | ProjectCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Count Type ColonneCountOutputType
   */

  export type ColonneCountOutputType = {
    cartes: number
  }

  export type ColonneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartes?: boolean | ColonneCountOutputTypeCountCartesArgs
  }

  // Custom InputTypes
  /**
   * ColonneCountOutputType without action
   */
  export type ColonneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColonneCountOutputType
     */
    select?: ColonneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColonneCountOutputType without action
   */
  export type ColonneCountOutputTypeCountCartesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carteWhereInput
  }


  /**
   * Count Type CarteCountOutputType
   */

  export type CarteCountOutputType = {
    carte_categorie: number
  }

  export type CarteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte_categorie?: boolean | CarteCountOutputTypeCountCarte_categorieArgs
  }

  // Custom InputTypes
  /**
   * CarteCountOutputType without action
   */
  export type CarteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarteCountOutputType
     */
    select?: CarteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarteCountOutputType without action
   */
  export type CarteCountOutputTypeCountCarte_categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carte_categorieWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    carte_categorie: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte_categorie?: boolean | CategorieCountOutputTypeCountCarte_categorieArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountCarte_categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carte_categorieWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votes?: boolean | user$votesArgs<ExtArgs>
    comments?: boolean | user$commentsArgs<ExtArgs>
    project?: boolean | user$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | user$votesArgs<ExtArgs>
    comments?: boolean | user$commentsArgs<ExtArgs>
    project?: boolean | user$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      votes: Prisma.$votePayload<ExtArgs>[]
      comments: Prisma.$commentPayload<ExtArgs>[]
      project: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends user$votesArgs<ExtArgs> = {}>(args?: Subset<T, user$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends user$commentsArgs<ExtArgs> = {}>(args?: Subset<T, user$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends user$projectArgs<ExtArgs> = {}>(args?: Subset<T, user$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.votes
   */
  export type user$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    where?: voteWhereInput
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    cursor?: voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * user.comments
   */
  export type user$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string | null
    createdById: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | userDefaultArgs<ExtArgs>
    votes?: boolean | project$votesArgs<ExtArgs>
    comments?: boolean | project$commentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | userDefaultArgs<ExtArgs>
    votes?: boolean | project$votesArgs<ExtArgs>
    comments?: boolean | project$commentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | userDefaultArgs<ExtArgs>
  }
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      createdBy: Prisma.$userPayload<ExtArgs>
      votes: Prisma.$votePayload<ExtArgs>[]
      comments: Prisma.$commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      createdById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends project$votesArgs<ExtArgs> = {}>(args?: Subset<T, project$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends project$commentsArgs<ExtArgs> = {}>(args?: Subset<T, project$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly title: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly createdById: FieldRef<"project", 'Int'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.votes
   */
  export type project$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    where?: voteWhereInput
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    cursor?: voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * project.comments
   */
  export type project$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type VoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type VoteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type VoteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type VoteSumAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type VoteMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vote to aggregate.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type voteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
    orderBy?: voteOrderByWithAggregationInput | voteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: voteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: number
    userId: number
    projectId: number
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends voteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type voteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
  }

  export type voteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectId", ExtArgs["result"]["vote"]>
  export type voteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type voteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type voteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $votePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vote"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      projectId: number
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type voteGetPayload<S extends boolean | null | undefined | voteDefaultArgs> = $Result.GetResult<Prisma.$votePayload, S>

  type voteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface voteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vote'], meta: { name: 'vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {voteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voteFindUniqueArgs>(args: SelectSubset<T, voteFindUniqueArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voteFindUniqueOrThrowArgs>(args: SelectSubset<T, voteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voteFindFirstArgs>(args?: SelectSubset<T, voteFindFirstArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voteFindFirstOrThrowArgs>(args?: SelectSubset<T, voteFindFirstOrThrowArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voteFindManyArgs>(args?: SelectSubset<T, voteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {voteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends voteCreateArgs>(args: SelectSubset<T, voteCreateArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {voteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voteCreateManyArgs>(args?: SelectSubset<T, voteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {voteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voteCreateManyAndReturnArgs>(args?: SelectSubset<T, voteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {voteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends voteDeleteArgs>(args: SelectSubset<T, voteDeleteArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {voteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voteUpdateArgs>(args: SelectSubset<T, voteUpdateArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {voteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voteDeleteManyArgs>(args?: SelectSubset<T, voteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voteUpdateManyArgs>(args: SelectSubset<T, voteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {voteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voteUpdateManyAndReturnArgs>(args: SelectSubset<T, voteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {voteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends voteUpsertArgs>(args: SelectSubset<T, voteUpsertArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends voteCountArgs>(
      args?: Subset<T, voteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voteGroupByArgs['orderBy'] }
        : { orderBy?: voteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vote model
   */
  readonly fields: voteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vote model
   */
  interface voteFieldRefs {
    readonly id: FieldRef<"vote", 'Int'>
    readonly userId: FieldRef<"vote", 'Int'>
    readonly projectId: FieldRef<"vote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * vote findUnique
   */
  export type voteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote findUniqueOrThrow
   */
  export type voteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote findFirst
   */
  export type voteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote findFirstOrThrow
   */
  export type voteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote findMany
   */
  export type voteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote create
   */
  export type voteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The data needed to create a vote.
     */
    data: XOR<voteCreateInput, voteUncheckedCreateInput>
  }

  /**
   * vote createMany
   */
  export type voteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: voteCreateManyInput | voteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vote createManyAndReturn
   */
  export type voteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * The data used to create many votes.
     */
    data: voteCreateManyInput | voteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote update
   */
  export type voteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The data needed to update a vote.
     */
    data: XOR<voteUpdateInput, voteUncheckedUpdateInput>
    /**
     * Choose, which vote to update.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote updateMany
   */
  export type voteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
  }

  /**
   * vote updateManyAndReturn
   */
  export type voteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * The data used to update votes.
     */
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote upsert
   */
  export type voteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The filter to search for the vote to update in case it exists.
     */
    where: voteWhereUniqueInput
    /**
     * In case the vote found by the `where` argument doesn't exist, create a new vote with this data.
     */
    create: XOR<voteCreateInput, voteUncheckedCreateInput>
    /**
     * In case the vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voteUpdateInput, voteUncheckedUpdateInput>
  }

  /**
   * vote delete
   */
  export type voteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter which vote to delete.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote deleteMany
   */
  export type voteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to delete.
     */
    limit?: number
  }

  /**
   * vote without action
   */
  export type voteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
  }


  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
    userId: number | null
    projectId: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    userId: number | null
    projectId: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    userId: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    userId: number
    projectId: number
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type commentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type commentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type commentSelectScalar = {
    id?: boolean
    text?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "userId" | "projectId" | "createdAt", ExtArgs["result"]["comment"]>
  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type commentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type commentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      userId: number
      projectId: number
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentFindUniqueArgs>(args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(args: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentFindFirstArgs>(args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentFindManyArgs>(args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends commentCreateArgs>(args: SelectSubset<T, commentCreateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentCreateManyArgs>(args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentCreateManyAndReturnArgs>(args?: SelectSubset<T, commentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends commentDeleteArgs>(args: SelectSubset<T, commentDeleteArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentUpdateArgs>(args: SelectSubset<T, commentUpdateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentDeleteManyArgs>(args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentUpdateManyArgs>(args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentUpdateManyAndReturnArgs>(args: SelectSubset<T, commentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends commentUpsertArgs>(args: SelectSubset<T, commentUpsertArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comment model
   */
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'Int'>
    readonly text: FieldRef<"comment", 'String'>
    readonly userId: FieldRef<"comment", 'Int'>
    readonly projectId: FieldRef<"comment", 'Int'>
    readonly createdAt: FieldRef<"comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment createManyAndReturn
   */
  export type commentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comment updateManyAndReturn
   */
  export type commentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Model colonne
   */

  export type AggregateColonne = {
    _count: ColonneCountAggregateOutputType | null
    _avg: ColonneAvgAggregateOutputType | null
    _sum: ColonneSumAggregateOutputType | null
    _min: ColonneMinAggregateOutputType | null
    _max: ColonneMaxAggregateOutputType | null
  }

  export type ColonneAvgAggregateOutputType = {
    id: number | null
    position: number | null
  }

  export type ColonneSumAggregateOutputType = {
    id: number | null
    position: number | null
  }

  export type ColonneMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    position: number | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type ColonneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    position: number | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type ColonneCountAggregateOutputType = {
    id: number
    name: number
    description: number
    position: number
    created_At: number
    updated_At: number
    _all: number
  }


  export type ColonneAvgAggregateInputType = {
    id?: true
    position?: true
  }

  export type ColonneSumAggregateInputType = {
    id?: true
    position?: true
  }

  export type ColonneMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    created_At?: true
    updated_At?: true
  }

  export type ColonneMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    created_At?: true
    updated_At?: true
  }

  export type ColonneCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    created_At?: true
    updated_At?: true
    _all?: true
  }

  export type ColonneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colonne to aggregate.
     */
    where?: colonneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colonnes to fetch.
     */
    orderBy?: colonneOrderByWithRelationInput | colonneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: colonneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colonnes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colonnes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned colonnes
    **/
    _count?: true | ColonneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColonneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColonneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColonneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColonneMaxAggregateInputType
  }

  export type GetColonneAggregateType<T extends ColonneAggregateArgs> = {
        [P in keyof T & keyof AggregateColonne]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColonne[P]>
      : GetScalarType<T[P], AggregateColonne[P]>
  }




  export type colonneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: colonneWhereInput
    orderBy?: colonneOrderByWithAggregationInput | colonneOrderByWithAggregationInput[]
    by: ColonneScalarFieldEnum[] | ColonneScalarFieldEnum
    having?: colonneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColonneCountAggregateInputType | true
    _avg?: ColonneAvgAggregateInputType
    _sum?: ColonneSumAggregateInputType
    _min?: ColonneMinAggregateInputType
    _max?: ColonneMaxAggregateInputType
  }

  export type ColonneGroupByOutputType = {
    id: number
    name: string
    description: string
    position: number
    created_At: Date
    updated_At: Date
    _count: ColonneCountAggregateOutputType | null
    _avg: ColonneAvgAggregateOutputType | null
    _sum: ColonneSumAggregateOutputType | null
    _min: ColonneMinAggregateOutputType | null
    _max: ColonneMaxAggregateOutputType | null
  }

  type GetColonneGroupByPayload<T extends colonneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColonneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColonneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColonneGroupByOutputType[P]>
            : GetScalarType<T[P], ColonneGroupByOutputType[P]>
        }
      >
    >


  export type colonneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    created_At?: boolean
    updated_At?: boolean
    cartes?: boolean | colonne$cartesArgs<ExtArgs>
    _count?: boolean | ColonneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colonne"]>

  export type colonneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    created_At?: boolean
    updated_At?: boolean
  }, ExtArgs["result"]["colonne"]>

  export type colonneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    created_At?: boolean
    updated_At?: boolean
  }, ExtArgs["result"]["colonne"]>

  export type colonneSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    created_At?: boolean
    updated_At?: boolean
  }

  export type colonneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "position" | "created_At" | "updated_At", ExtArgs["result"]["colonne"]>
  export type colonneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartes?: boolean | colonne$cartesArgs<ExtArgs>
    _count?: boolean | ColonneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type colonneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type colonneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $colonnePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "colonne"
    objects: {
      cartes: Prisma.$cartePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      position: number
      created_At: Date
      updated_At: Date
    }, ExtArgs["result"]["colonne"]>
    composites: {}
  }

  type colonneGetPayload<S extends boolean | null | undefined | colonneDefaultArgs> = $Result.GetResult<Prisma.$colonnePayload, S>

  type colonneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<colonneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColonneCountAggregateInputType | true
    }

  export interface colonneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['colonne'], meta: { name: 'colonne' } }
    /**
     * Find zero or one Colonne that matches the filter.
     * @param {colonneFindUniqueArgs} args - Arguments to find a Colonne
     * @example
     * // Get one Colonne
     * const colonne = await prisma.colonne.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends colonneFindUniqueArgs>(args: SelectSubset<T, colonneFindUniqueArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colonne that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {colonneFindUniqueOrThrowArgs} args - Arguments to find a Colonne
     * @example
     * // Get one Colonne
     * const colonne = await prisma.colonne.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends colonneFindUniqueOrThrowArgs>(args: SelectSubset<T, colonneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colonne that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneFindFirstArgs} args - Arguments to find a Colonne
     * @example
     * // Get one Colonne
     * const colonne = await prisma.colonne.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends colonneFindFirstArgs>(args?: SelectSubset<T, colonneFindFirstArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colonne that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneFindFirstOrThrowArgs} args - Arguments to find a Colonne
     * @example
     * // Get one Colonne
     * const colonne = await prisma.colonne.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends colonneFindFirstOrThrowArgs>(args?: SelectSubset<T, colonneFindFirstOrThrowArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colonnes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colonnes
     * const colonnes = await prisma.colonne.findMany()
     * 
     * // Get first 10 Colonnes
     * const colonnes = await prisma.colonne.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colonneWithIdOnly = await prisma.colonne.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends colonneFindManyArgs>(args?: SelectSubset<T, colonneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colonne.
     * @param {colonneCreateArgs} args - Arguments to create a Colonne.
     * @example
     * // Create one Colonne
     * const Colonne = await prisma.colonne.create({
     *   data: {
     *     // ... data to create a Colonne
     *   }
     * })
     * 
     */
    create<T extends colonneCreateArgs>(args: SelectSubset<T, colonneCreateArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colonnes.
     * @param {colonneCreateManyArgs} args - Arguments to create many Colonnes.
     * @example
     * // Create many Colonnes
     * const colonne = await prisma.colonne.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends colonneCreateManyArgs>(args?: SelectSubset<T, colonneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colonnes and returns the data saved in the database.
     * @param {colonneCreateManyAndReturnArgs} args - Arguments to create many Colonnes.
     * @example
     * // Create many Colonnes
     * const colonne = await prisma.colonne.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colonnes and only return the `id`
     * const colonneWithIdOnly = await prisma.colonne.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends colonneCreateManyAndReturnArgs>(args?: SelectSubset<T, colonneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colonne.
     * @param {colonneDeleteArgs} args - Arguments to delete one Colonne.
     * @example
     * // Delete one Colonne
     * const Colonne = await prisma.colonne.delete({
     *   where: {
     *     // ... filter to delete one Colonne
     *   }
     * })
     * 
     */
    delete<T extends colonneDeleteArgs>(args: SelectSubset<T, colonneDeleteArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colonne.
     * @param {colonneUpdateArgs} args - Arguments to update one Colonne.
     * @example
     * // Update one Colonne
     * const colonne = await prisma.colonne.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends colonneUpdateArgs>(args: SelectSubset<T, colonneUpdateArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colonnes.
     * @param {colonneDeleteManyArgs} args - Arguments to filter Colonnes to delete.
     * @example
     * // Delete a few Colonnes
     * const { count } = await prisma.colonne.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends colonneDeleteManyArgs>(args?: SelectSubset<T, colonneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colonnes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colonnes
     * const colonne = await prisma.colonne.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends colonneUpdateManyArgs>(args: SelectSubset<T, colonneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colonnes and returns the data updated in the database.
     * @param {colonneUpdateManyAndReturnArgs} args - Arguments to update many Colonnes.
     * @example
     * // Update many Colonnes
     * const colonne = await prisma.colonne.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colonnes and only return the `id`
     * const colonneWithIdOnly = await prisma.colonne.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends colonneUpdateManyAndReturnArgs>(args: SelectSubset<T, colonneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colonne.
     * @param {colonneUpsertArgs} args - Arguments to update or create a Colonne.
     * @example
     * // Update or create a Colonne
     * const colonne = await prisma.colonne.upsert({
     *   create: {
     *     // ... data to create a Colonne
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colonne we want to update
     *   }
     * })
     */
    upsert<T extends colonneUpsertArgs>(args: SelectSubset<T, colonneUpsertArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colonnes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneCountArgs} args - Arguments to filter Colonnes to count.
     * @example
     * // Count the number of Colonnes
     * const count = await prisma.colonne.count({
     *   where: {
     *     // ... the filter for the Colonnes we want to count
     *   }
     * })
    **/
    count<T extends colonneCountArgs>(
      args?: Subset<T, colonneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColonneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colonne.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColonneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColonneAggregateArgs>(args: Subset<T, ColonneAggregateArgs>): Prisma.PrismaPromise<GetColonneAggregateType<T>>

    /**
     * Group by Colonne.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colonneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends colonneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: colonneGroupByArgs['orderBy'] }
        : { orderBy?: colonneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, colonneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColonneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the colonne model
   */
  readonly fields: colonneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for colonne.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__colonneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cartes<T extends colonne$cartesArgs<ExtArgs> = {}>(args?: Subset<T, colonne$cartesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the colonne model
   */
  interface colonneFieldRefs {
    readonly id: FieldRef<"colonne", 'Int'>
    readonly name: FieldRef<"colonne", 'String'>
    readonly description: FieldRef<"colonne", 'String'>
    readonly position: FieldRef<"colonne", 'Int'>
    readonly created_At: FieldRef<"colonne", 'DateTime'>
    readonly updated_At: FieldRef<"colonne", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * colonne findUnique
   */
  export type colonneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter, which colonne to fetch.
     */
    where: colonneWhereUniqueInput
  }

  /**
   * colonne findUniqueOrThrow
   */
  export type colonneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter, which colonne to fetch.
     */
    where: colonneWhereUniqueInput
  }

  /**
   * colonne findFirst
   */
  export type colonneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter, which colonne to fetch.
     */
    where?: colonneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colonnes to fetch.
     */
    orderBy?: colonneOrderByWithRelationInput | colonneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colonnes.
     */
    cursor?: colonneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colonnes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colonnes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colonnes.
     */
    distinct?: ColonneScalarFieldEnum | ColonneScalarFieldEnum[]
  }

  /**
   * colonne findFirstOrThrow
   */
  export type colonneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter, which colonne to fetch.
     */
    where?: colonneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colonnes to fetch.
     */
    orderBy?: colonneOrderByWithRelationInput | colonneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colonnes.
     */
    cursor?: colonneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colonnes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colonnes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colonnes.
     */
    distinct?: ColonneScalarFieldEnum | ColonneScalarFieldEnum[]
  }

  /**
   * colonne findMany
   */
  export type colonneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter, which colonnes to fetch.
     */
    where?: colonneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colonnes to fetch.
     */
    orderBy?: colonneOrderByWithRelationInput | colonneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing colonnes.
     */
    cursor?: colonneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colonnes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colonnes.
     */
    skip?: number
    distinct?: ColonneScalarFieldEnum | ColonneScalarFieldEnum[]
  }

  /**
   * colonne create
   */
  export type colonneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * The data needed to create a colonne.
     */
    data: XOR<colonneCreateInput, colonneUncheckedCreateInput>
  }

  /**
   * colonne createMany
   */
  export type colonneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many colonnes.
     */
    data: colonneCreateManyInput | colonneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * colonne createManyAndReturn
   */
  export type colonneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * The data used to create many colonnes.
     */
    data: colonneCreateManyInput | colonneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * colonne update
   */
  export type colonneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * The data needed to update a colonne.
     */
    data: XOR<colonneUpdateInput, colonneUncheckedUpdateInput>
    /**
     * Choose, which colonne to update.
     */
    where: colonneWhereUniqueInput
  }

  /**
   * colonne updateMany
   */
  export type colonneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update colonnes.
     */
    data: XOR<colonneUpdateManyMutationInput, colonneUncheckedUpdateManyInput>
    /**
     * Filter which colonnes to update
     */
    where?: colonneWhereInput
    /**
     * Limit how many colonnes to update.
     */
    limit?: number
  }

  /**
   * colonne updateManyAndReturn
   */
  export type colonneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * The data used to update colonnes.
     */
    data: XOR<colonneUpdateManyMutationInput, colonneUncheckedUpdateManyInput>
    /**
     * Filter which colonnes to update
     */
    where?: colonneWhereInput
    /**
     * Limit how many colonnes to update.
     */
    limit?: number
  }

  /**
   * colonne upsert
   */
  export type colonneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * The filter to search for the colonne to update in case it exists.
     */
    where: colonneWhereUniqueInput
    /**
     * In case the colonne found by the `where` argument doesn't exist, create a new colonne with this data.
     */
    create: XOR<colonneCreateInput, colonneUncheckedCreateInput>
    /**
     * In case the colonne was found with the provided `where` argument, update it with this data.
     */
    update: XOR<colonneUpdateInput, colonneUncheckedUpdateInput>
  }

  /**
   * colonne delete
   */
  export type colonneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    /**
     * Filter which colonne to delete.
     */
    where: colonneWhereUniqueInput
  }

  /**
   * colonne deleteMany
   */
  export type colonneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colonnes to delete
     */
    where?: colonneWhereInput
    /**
     * Limit how many colonnes to delete.
     */
    limit?: number
  }

  /**
   * colonne.cartes
   */
  export type colonne$cartesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    where?: carteWhereInput
    orderBy?: carteOrderByWithRelationInput | carteOrderByWithRelationInput[]
    cursor?: carteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * colonne without action
   */
  export type colonneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
  }


  /**
   * Model carte
   */

  export type AggregateCarte = {
    _count: CarteCountAggregateOutputType | null
    _avg: CarteAvgAggregateOutputType | null
    _sum: CarteSumAggregateOutputType | null
    _min: CarteMinAggregateOutputType | null
    _max: CarteMaxAggregateOutputType | null
  }

  export type CarteAvgAggregateOutputType = {
    id: number | null
    position: number | null
    colonneId: number | null
  }

  export type CarteSumAggregateOutputType = {
    id: number | null
    position: number | null
    colonneId: number | null
  }

  export type CarteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    position: number | null
    colonneId: number | null
    start_date: Date | null
    end_date: Date | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type CarteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    position: number | null
    colonneId: number | null
    start_date: Date | null
    end_date: Date | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type CarteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    position: number
    colonneId: number
    start_date: number
    end_date: number
    created_At: number
    updated_At: number
    _all: number
  }


  export type CarteAvgAggregateInputType = {
    id?: true
    position?: true
    colonneId?: true
  }

  export type CarteSumAggregateInputType = {
    id?: true
    position?: true
    colonneId?: true
  }

  export type CarteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    colonneId?: true
    start_date?: true
    end_date?: true
    created_At?: true
    updated_At?: true
  }

  export type CarteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    colonneId?: true
    start_date?: true
    end_date?: true
    created_At?: true
    updated_At?: true
  }

  export type CarteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    position?: true
    colonneId?: true
    start_date?: true
    end_date?: true
    created_At?: true
    updated_At?: true
    _all?: true
  }

  export type CarteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carte to aggregate.
     */
    where?: carteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartes to fetch.
     */
    orderBy?: carteOrderByWithRelationInput | carteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartes
    **/
    _count?: true | CarteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarteMaxAggregateInputType
  }

  export type GetCarteAggregateType<T extends CarteAggregateArgs> = {
        [P in keyof T & keyof AggregateCarte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarte[P]>
      : GetScalarType<T[P], AggregateCarte[P]>
  }




  export type carteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carteWhereInput
    orderBy?: carteOrderByWithAggregationInput | carteOrderByWithAggregationInput[]
    by: CarteScalarFieldEnum[] | CarteScalarFieldEnum
    having?: carteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarteCountAggregateInputType | true
    _avg?: CarteAvgAggregateInputType
    _sum?: CarteSumAggregateInputType
    _min?: CarteMinAggregateInputType
    _max?: CarteMaxAggregateInputType
  }

  export type CarteGroupByOutputType = {
    id: number
    name: string
    description: string
    position: number
    colonneId: number | null
    start_date: Date
    end_date: Date
    created_At: Date
    updated_At: Date
    _count: CarteCountAggregateOutputType | null
    _avg: CarteAvgAggregateOutputType | null
    _sum: CarteSumAggregateOutputType | null
    _min: CarteMinAggregateOutputType | null
    _max: CarteMaxAggregateOutputType | null
  }

  type GetCarteGroupByPayload<T extends carteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarteGroupByOutputType[P]>
            : GetScalarType<T[P], CarteGroupByOutputType[P]>
        }
      >
    >


  export type carteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    colonneId?: boolean
    start_date?: boolean
    end_date?: boolean
    created_At?: boolean
    updated_At?: boolean
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
    carte_categorie?: boolean | carte$carte_categorieArgs<ExtArgs>
    _count?: boolean | CarteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carte"]>

  export type carteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    colonneId?: boolean
    start_date?: boolean
    end_date?: boolean
    created_At?: boolean
    updated_At?: boolean
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
  }, ExtArgs["result"]["carte"]>

  export type carteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    colonneId?: boolean
    start_date?: boolean
    end_date?: boolean
    created_At?: boolean
    updated_At?: boolean
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
  }, ExtArgs["result"]["carte"]>

  export type carteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    position?: boolean
    colonneId?: boolean
    start_date?: boolean
    end_date?: boolean
    created_At?: boolean
    updated_At?: boolean
  }

  export type carteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "position" | "colonneId" | "start_date" | "end_date" | "created_At" | "updated_At", ExtArgs["result"]["carte"]>
  export type carteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
    carte_categorie?: boolean | carte$carte_categorieArgs<ExtArgs>
    _count?: boolean | CarteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type carteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
  }
  export type carteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Colonne?: boolean | carte$ColonneArgs<ExtArgs>
  }

  export type $cartePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carte"
    objects: {
      Colonne: Prisma.$colonnePayload<ExtArgs> | null
      carte_categorie: Prisma.$carte_categoriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      position: number
      colonneId: number | null
      start_date: Date
      end_date: Date
      created_At: Date
      updated_At: Date
    }, ExtArgs["result"]["carte"]>
    composites: {}
  }

  type carteGetPayload<S extends boolean | null | undefined | carteDefaultArgs> = $Result.GetResult<Prisma.$cartePayload, S>

  type carteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarteCountAggregateInputType | true
    }

  export interface carteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carte'], meta: { name: 'carte' } }
    /**
     * Find zero or one Carte that matches the filter.
     * @param {carteFindUniqueArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carteFindUniqueArgs>(args: SelectSubset<T, carteFindUniqueArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carteFindUniqueOrThrowArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carteFindUniqueOrThrowArgs>(args: SelectSubset<T, carteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteFindFirstArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carteFindFirstArgs>(args?: SelectSubset<T, carteFindFirstArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteFindFirstOrThrowArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carteFindFirstOrThrowArgs>(args?: SelectSubset<T, carteFindFirstOrThrowArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartes
     * const cartes = await prisma.carte.findMany()
     * 
     * // Get first 10 Cartes
     * const cartes = await prisma.carte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carteWithIdOnly = await prisma.carte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carteFindManyArgs>(args?: SelectSubset<T, carteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carte.
     * @param {carteCreateArgs} args - Arguments to create a Carte.
     * @example
     * // Create one Carte
     * const Carte = await prisma.carte.create({
     *   data: {
     *     // ... data to create a Carte
     *   }
     * })
     * 
     */
    create<T extends carteCreateArgs>(args: SelectSubset<T, carteCreateArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartes.
     * @param {carteCreateManyArgs} args - Arguments to create many Cartes.
     * @example
     * // Create many Cartes
     * const carte = await prisma.carte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carteCreateManyArgs>(args?: SelectSubset<T, carteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartes and returns the data saved in the database.
     * @param {carteCreateManyAndReturnArgs} args - Arguments to create many Cartes.
     * @example
     * // Create many Cartes
     * const carte = await prisma.carte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartes and only return the `id`
     * const carteWithIdOnly = await prisma.carte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carteCreateManyAndReturnArgs>(args?: SelectSubset<T, carteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carte.
     * @param {carteDeleteArgs} args - Arguments to delete one Carte.
     * @example
     * // Delete one Carte
     * const Carte = await prisma.carte.delete({
     *   where: {
     *     // ... filter to delete one Carte
     *   }
     * })
     * 
     */
    delete<T extends carteDeleteArgs>(args: SelectSubset<T, carteDeleteArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carte.
     * @param {carteUpdateArgs} args - Arguments to update one Carte.
     * @example
     * // Update one Carte
     * const carte = await prisma.carte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carteUpdateArgs>(args: SelectSubset<T, carteUpdateArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartes.
     * @param {carteDeleteManyArgs} args - Arguments to filter Cartes to delete.
     * @example
     * // Delete a few Cartes
     * const { count } = await prisma.carte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carteDeleteManyArgs>(args?: SelectSubset<T, carteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartes
     * const carte = await prisma.carte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carteUpdateManyArgs>(args: SelectSubset<T, carteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartes and returns the data updated in the database.
     * @param {carteUpdateManyAndReturnArgs} args - Arguments to update many Cartes.
     * @example
     * // Update many Cartes
     * const carte = await prisma.carte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartes and only return the `id`
     * const carteWithIdOnly = await prisma.carte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carteUpdateManyAndReturnArgs>(args: SelectSubset<T, carteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carte.
     * @param {carteUpsertArgs} args - Arguments to update or create a Carte.
     * @example
     * // Update or create a Carte
     * const carte = await prisma.carte.upsert({
     *   create: {
     *     // ... data to create a Carte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carte we want to update
     *   }
     * })
     */
    upsert<T extends carteUpsertArgs>(args: SelectSubset<T, carteUpsertArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteCountArgs} args - Arguments to filter Cartes to count.
     * @example
     * // Count the number of Cartes
     * const count = await prisma.carte.count({
     *   where: {
     *     // ... the filter for the Cartes we want to count
     *   }
     * })
    **/
    count<T extends carteCountArgs>(
      args?: Subset<T, carteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarteAggregateArgs>(args: Subset<T, CarteAggregateArgs>): Prisma.PrismaPromise<GetCarteAggregateType<T>>

    /**
     * Group by Carte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carteGroupByArgs['orderBy'] }
        : { orderBy?: carteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carte model
   */
  readonly fields: carteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Colonne<T extends carte$ColonneArgs<ExtArgs> = {}>(args?: Subset<T, carte$ColonneArgs<ExtArgs>>): Prisma__colonneClient<$Result.GetResult<Prisma.$colonnePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carte_categorie<T extends carte$carte_categorieArgs<ExtArgs> = {}>(args?: Subset<T, carte$carte_categorieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carte model
   */
  interface carteFieldRefs {
    readonly id: FieldRef<"carte", 'Int'>
    readonly name: FieldRef<"carte", 'String'>
    readonly description: FieldRef<"carte", 'String'>
    readonly position: FieldRef<"carte", 'Int'>
    readonly colonneId: FieldRef<"carte", 'Int'>
    readonly start_date: FieldRef<"carte", 'DateTime'>
    readonly end_date: FieldRef<"carte", 'DateTime'>
    readonly created_At: FieldRef<"carte", 'DateTime'>
    readonly updated_At: FieldRef<"carte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carte findUnique
   */
  export type carteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter, which carte to fetch.
     */
    where: carteWhereUniqueInput
  }

  /**
   * carte findUniqueOrThrow
   */
  export type carteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter, which carte to fetch.
     */
    where: carteWhereUniqueInput
  }

  /**
   * carte findFirst
   */
  export type carteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter, which carte to fetch.
     */
    where?: carteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartes to fetch.
     */
    orderBy?: carteOrderByWithRelationInput | carteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartes.
     */
    cursor?: carteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartes.
     */
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * carte findFirstOrThrow
   */
  export type carteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter, which carte to fetch.
     */
    where?: carteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartes to fetch.
     */
    orderBy?: carteOrderByWithRelationInput | carteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartes.
     */
    cursor?: carteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartes.
     */
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * carte findMany
   */
  export type carteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter, which cartes to fetch.
     */
    where?: carteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartes to fetch.
     */
    orderBy?: carteOrderByWithRelationInput | carteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartes.
     */
    cursor?: carteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartes.
     */
    skip?: number
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * carte create
   */
  export type carteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * The data needed to create a carte.
     */
    data: XOR<carteCreateInput, carteUncheckedCreateInput>
  }

  /**
   * carte createMany
   */
  export type carteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartes.
     */
    data: carteCreateManyInput | carteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carte createManyAndReturn
   */
  export type carteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * The data used to create many cartes.
     */
    data: carteCreateManyInput | carteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carte update
   */
  export type carteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * The data needed to update a carte.
     */
    data: XOR<carteUpdateInput, carteUncheckedUpdateInput>
    /**
     * Choose, which carte to update.
     */
    where: carteWhereUniqueInput
  }

  /**
   * carte updateMany
   */
  export type carteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartes.
     */
    data: XOR<carteUpdateManyMutationInput, carteUncheckedUpdateManyInput>
    /**
     * Filter which cartes to update
     */
    where?: carteWhereInput
    /**
     * Limit how many cartes to update.
     */
    limit?: number
  }

  /**
   * carte updateManyAndReturn
   */
  export type carteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * The data used to update cartes.
     */
    data: XOR<carteUpdateManyMutationInput, carteUncheckedUpdateManyInput>
    /**
     * Filter which cartes to update
     */
    where?: carteWhereInput
    /**
     * Limit how many cartes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carte upsert
   */
  export type carteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * The filter to search for the carte to update in case it exists.
     */
    where: carteWhereUniqueInput
    /**
     * In case the carte found by the `where` argument doesn't exist, create a new carte with this data.
     */
    create: XOR<carteCreateInput, carteUncheckedCreateInput>
    /**
     * In case the carte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carteUpdateInput, carteUncheckedUpdateInput>
  }

  /**
   * carte delete
   */
  export type carteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
    /**
     * Filter which carte to delete.
     */
    where: carteWhereUniqueInput
  }

  /**
   * carte deleteMany
   */
  export type carteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartes to delete
     */
    where?: carteWhereInput
    /**
     * Limit how many cartes to delete.
     */
    limit?: number
  }

  /**
   * carte.Colonne
   */
  export type carte$ColonneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colonne
     */
    select?: colonneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colonne
     */
    omit?: colonneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colonneInclude<ExtArgs> | null
    where?: colonneWhereInput
  }

  /**
   * carte.carte_categorie
   */
  export type carte$carte_categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    where?: carte_categorieWhereInput
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    cursor?: carte_categorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carte_categorieScalarFieldEnum | Carte_categorieScalarFieldEnum[]
  }

  /**
   * carte without action
   */
  export type carteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte
     */
    select?: carteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte
     */
    omit?: carteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carteInclude<ExtArgs> | null
  }


  /**
   * Model categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    nom: string | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nom: number
    created_At: number
    updated_At: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    nom?: true
    created_At?: true
    updated_At?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nom?: true
    created_At?: true
    updated_At?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nom?: true
    created_At?: true
    updated_At?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorie to aggregate.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type categorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorieWhereInput
    orderBy?: categorieOrderByWithAggregationInput | categorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: categorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    nom: string
    created_At: Date
    updated_At: Date
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends categorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type categorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    created_At?: boolean
    updated_At?: boolean
    carte_categorie?: boolean | categorie$carte_categorieArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    created_At?: boolean
    updated_At?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    created_At?: boolean
    updated_At?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectScalar = {
    id?: boolean
    nom?: boolean
    created_At?: boolean
    updated_At?: boolean
  }

  export type categorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "created_At" | "updated_At", ExtArgs["result"]["categorie"]>
  export type categorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte_categorie?: boolean | categorie$carte_categorieArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorie"
    objects: {
      carte_categorie: Prisma.$carte_categoriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      created_At: Date
      updated_At: Date
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type categorieGetPayload<S extends boolean | null | undefined | categorieDefaultArgs> = $Result.GetResult<Prisma.$categoriePayload, S>

  type categorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface categorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorie'], meta: { name: 'categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {categorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categorieFindUniqueArgs>(args: SelectSubset<T, categorieFindUniqueArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categorieFindUniqueOrThrowArgs>(args: SelectSubset<T, categorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categorieFindFirstArgs>(args?: SelectSubset<T, categorieFindFirstArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categorieFindFirstOrThrowArgs>(args?: SelectSubset<T, categorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categorieFindManyArgs>(args?: SelectSubset<T, categorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {categorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends categorieCreateArgs>(args: SelectSubset<T, categorieCreateArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categorieCreateManyArgs>(args?: SelectSubset<T, categorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categorieCreateManyAndReturnArgs>(args?: SelectSubset<T, categorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {categorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends categorieDeleteArgs>(args: SelectSubset<T, categorieDeleteArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {categorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categorieUpdateArgs>(args: SelectSubset<T, categorieUpdateArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categorieDeleteManyArgs>(args?: SelectSubset<T, categorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categorieUpdateManyArgs>(args: SelectSubset<T, categorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categorieUpdateManyAndReturnArgs>(args: SelectSubset<T, categorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {categorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends categorieUpsertArgs>(args: SelectSubset<T, categorieUpsertArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categorieCountArgs>(
      args?: Subset<T, categorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorieGroupByArgs['orderBy'] }
        : { orderBy?: categorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorie model
   */
  readonly fields: categorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carte_categorie<T extends categorie$carte_categorieArgs<ExtArgs> = {}>(args?: Subset<T, categorie$carte_categorieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorie model
   */
  interface categorieFieldRefs {
    readonly id: FieldRef<"categorie", 'Int'>
    readonly nom: FieldRef<"categorie", 'String'>
    readonly created_At: FieldRef<"categorie", 'DateTime'>
    readonly updated_At: FieldRef<"categorie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categorie findUnique
   */
  export type categorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findUniqueOrThrow
   */
  export type categorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findFirst
   */
  export type categorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findFirstOrThrow
   */
  export type categorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findMany
   */
  export type categorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie create
   */
  export type categorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to create a categorie.
     */
    data: XOR<categorieCreateInput, categorieUncheckedCreateInput>
  }

  /**
   * categorie createMany
   */
  export type categorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie createManyAndReturn
   */
  export type categorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie update
   */
  export type categorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to update a categorie.
     */
    data: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
    /**
     * Choose, which categorie to update.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie updateMany
   */
  export type categorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categorie updateManyAndReturn
   */
  export type categorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categorie upsert
   */
  export type categorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The filter to search for the categorie to update in case it exists.
     */
    where: categorieWhereUniqueInput
    /**
     * In case the categorie found by the `where` argument doesn't exist, create a new categorie with this data.
     */
    create: XOR<categorieCreateInput, categorieUncheckedCreateInput>
    /**
     * In case the categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
  }

  /**
   * categorie delete
   */
  export type categorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter which categorie to delete.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie deleteMany
   */
  export type categorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categorie.carte_categorie
   */
  export type categorie$carte_categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    where?: carte_categorieWhereInput
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    cursor?: carte_categorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carte_categorieScalarFieldEnum | Carte_categorieScalarFieldEnum[]
  }

  /**
   * categorie without action
   */
  export type categorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
  }


  /**
   * Model carte_categorie
   */

  export type AggregateCarte_categorie = {
    _count: Carte_categorieCountAggregateOutputType | null
    _avg: Carte_categorieAvgAggregateOutputType | null
    _sum: Carte_categorieSumAggregateOutputType | null
    _min: Carte_categorieMinAggregateOutputType | null
    _max: Carte_categorieMaxAggregateOutputType | null
  }

  export type Carte_categorieAvgAggregateOutputType = {
    id: number | null
    carteId: number | null
    categorieId: number | null
  }

  export type Carte_categorieSumAggregateOutputType = {
    id: number | null
    carteId: number | null
    categorieId: number | null
  }

  export type Carte_categorieMinAggregateOutputType = {
    id: number | null
    carteId: number | null
    categorieId: number | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type Carte_categorieMaxAggregateOutputType = {
    id: number | null
    carteId: number | null
    categorieId: number | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type Carte_categorieCountAggregateOutputType = {
    id: number
    carteId: number
    categorieId: number
    created_At: number
    updated_At: number
    _all: number
  }


  export type Carte_categorieAvgAggregateInputType = {
    id?: true
    carteId?: true
    categorieId?: true
  }

  export type Carte_categorieSumAggregateInputType = {
    id?: true
    carteId?: true
    categorieId?: true
  }

  export type Carte_categorieMinAggregateInputType = {
    id?: true
    carteId?: true
    categorieId?: true
    created_At?: true
    updated_At?: true
  }

  export type Carte_categorieMaxAggregateInputType = {
    id?: true
    carteId?: true
    categorieId?: true
    created_At?: true
    updated_At?: true
  }

  export type Carte_categorieCountAggregateInputType = {
    id?: true
    carteId?: true
    categorieId?: true
    created_At?: true
    updated_At?: true
    _all?: true
  }

  export type Carte_categorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carte_categorie to aggregate.
     */
    where?: carte_categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carte_categories to fetch.
     */
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carte_categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carte_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carte_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carte_categories
    **/
    _count?: true | Carte_categorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Carte_categorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Carte_categorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Carte_categorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Carte_categorieMaxAggregateInputType
  }

  export type GetCarte_categorieAggregateType<T extends Carte_categorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCarte_categorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarte_categorie[P]>
      : GetScalarType<T[P], AggregateCarte_categorie[P]>
  }




  export type carte_categorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carte_categorieWhereInput
    orderBy?: carte_categorieOrderByWithAggregationInput | carte_categorieOrderByWithAggregationInput[]
    by: Carte_categorieScalarFieldEnum[] | Carte_categorieScalarFieldEnum
    having?: carte_categorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Carte_categorieCountAggregateInputType | true
    _avg?: Carte_categorieAvgAggregateInputType
    _sum?: Carte_categorieSumAggregateInputType
    _min?: Carte_categorieMinAggregateInputType
    _max?: Carte_categorieMaxAggregateInputType
  }

  export type Carte_categorieGroupByOutputType = {
    id: number
    carteId: number
    categorieId: number
    created_At: Date
    updated_At: Date
    _count: Carte_categorieCountAggregateOutputType | null
    _avg: Carte_categorieAvgAggregateOutputType | null
    _sum: Carte_categorieSumAggregateOutputType | null
    _min: Carte_categorieMinAggregateOutputType | null
    _max: Carte_categorieMaxAggregateOutputType | null
  }

  type GetCarte_categorieGroupByPayload<T extends carte_categorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Carte_categorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Carte_categorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Carte_categorieGroupByOutputType[P]>
            : GetScalarType<T[P], Carte_categorieGroupByOutputType[P]>
        }
      >
    >


  export type carte_categorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteId?: boolean
    categorieId?: boolean
    created_At?: boolean
    updated_At?: boolean
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carte_categorie"]>

  export type carte_categorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteId?: boolean
    categorieId?: boolean
    created_At?: boolean
    updated_At?: boolean
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carte_categorie"]>

  export type carte_categorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carteId?: boolean
    categorieId?: boolean
    created_At?: boolean
    updated_At?: boolean
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carte_categorie"]>

  export type carte_categorieSelectScalar = {
    id?: boolean
    carteId?: boolean
    categorieId?: boolean
    created_At?: boolean
    updated_At?: boolean
  }

  export type carte_categorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carteId" | "categorieId" | "created_At" | "updated_At", ExtArgs["result"]["carte_categorie"]>
  export type carte_categorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }
  export type carte_categorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }
  export type carte_categorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte?: boolean | carteDefaultArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
  }

  export type $carte_categoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carte_categorie"
    objects: {
      carte: Prisma.$cartePayload<ExtArgs>
      categorie: Prisma.$categoriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carteId: number
      categorieId: number
      created_At: Date
      updated_At: Date
    }, ExtArgs["result"]["carte_categorie"]>
    composites: {}
  }

  type carte_categorieGetPayload<S extends boolean | null | undefined | carte_categorieDefaultArgs> = $Result.GetResult<Prisma.$carte_categoriePayload, S>

  type carte_categorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carte_categorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Carte_categorieCountAggregateInputType | true
    }

  export interface carte_categorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carte_categorie'], meta: { name: 'carte_categorie' } }
    /**
     * Find zero or one Carte_categorie that matches the filter.
     * @param {carte_categorieFindUniqueArgs} args - Arguments to find a Carte_categorie
     * @example
     * // Get one Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carte_categorieFindUniqueArgs>(args: SelectSubset<T, carte_categorieFindUniqueArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carte_categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carte_categorieFindUniqueOrThrowArgs} args - Arguments to find a Carte_categorie
     * @example
     * // Get one Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carte_categorieFindUniqueOrThrowArgs>(args: SelectSubset<T, carte_categorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte_categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieFindFirstArgs} args - Arguments to find a Carte_categorie
     * @example
     * // Get one Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carte_categorieFindFirstArgs>(args?: SelectSubset<T, carte_categorieFindFirstArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte_categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieFindFirstOrThrowArgs} args - Arguments to find a Carte_categorie
     * @example
     * // Get one Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carte_categorieFindFirstOrThrowArgs>(args?: SelectSubset<T, carte_categorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carte_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carte_categories
     * const carte_categories = await prisma.carte_categorie.findMany()
     * 
     * // Get first 10 Carte_categories
     * const carte_categories = await prisma.carte_categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carte_categorieWithIdOnly = await prisma.carte_categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carte_categorieFindManyArgs>(args?: SelectSubset<T, carte_categorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carte_categorie.
     * @param {carte_categorieCreateArgs} args - Arguments to create a Carte_categorie.
     * @example
     * // Create one Carte_categorie
     * const Carte_categorie = await prisma.carte_categorie.create({
     *   data: {
     *     // ... data to create a Carte_categorie
     *   }
     * })
     * 
     */
    create<T extends carte_categorieCreateArgs>(args: SelectSubset<T, carte_categorieCreateArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carte_categories.
     * @param {carte_categorieCreateManyArgs} args - Arguments to create many Carte_categories.
     * @example
     * // Create many Carte_categories
     * const carte_categorie = await prisma.carte_categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carte_categorieCreateManyArgs>(args?: SelectSubset<T, carte_categorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carte_categories and returns the data saved in the database.
     * @param {carte_categorieCreateManyAndReturnArgs} args - Arguments to create many Carte_categories.
     * @example
     * // Create many Carte_categories
     * const carte_categorie = await prisma.carte_categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carte_categories and only return the `id`
     * const carte_categorieWithIdOnly = await prisma.carte_categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carte_categorieCreateManyAndReturnArgs>(args?: SelectSubset<T, carte_categorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carte_categorie.
     * @param {carte_categorieDeleteArgs} args - Arguments to delete one Carte_categorie.
     * @example
     * // Delete one Carte_categorie
     * const Carte_categorie = await prisma.carte_categorie.delete({
     *   where: {
     *     // ... filter to delete one Carte_categorie
     *   }
     * })
     * 
     */
    delete<T extends carte_categorieDeleteArgs>(args: SelectSubset<T, carte_categorieDeleteArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carte_categorie.
     * @param {carte_categorieUpdateArgs} args - Arguments to update one Carte_categorie.
     * @example
     * // Update one Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carte_categorieUpdateArgs>(args: SelectSubset<T, carte_categorieUpdateArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carte_categories.
     * @param {carte_categorieDeleteManyArgs} args - Arguments to filter Carte_categories to delete.
     * @example
     * // Delete a few Carte_categories
     * const { count } = await prisma.carte_categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carte_categorieDeleteManyArgs>(args?: SelectSubset<T, carte_categorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carte_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carte_categories
     * const carte_categorie = await prisma.carte_categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carte_categorieUpdateManyArgs>(args: SelectSubset<T, carte_categorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carte_categories and returns the data updated in the database.
     * @param {carte_categorieUpdateManyAndReturnArgs} args - Arguments to update many Carte_categories.
     * @example
     * // Update many Carte_categories
     * const carte_categorie = await prisma.carte_categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carte_categories and only return the `id`
     * const carte_categorieWithIdOnly = await prisma.carte_categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carte_categorieUpdateManyAndReturnArgs>(args: SelectSubset<T, carte_categorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carte_categorie.
     * @param {carte_categorieUpsertArgs} args - Arguments to update or create a Carte_categorie.
     * @example
     * // Update or create a Carte_categorie
     * const carte_categorie = await prisma.carte_categorie.upsert({
     *   create: {
     *     // ... data to create a Carte_categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carte_categorie we want to update
     *   }
     * })
     */
    upsert<T extends carte_categorieUpsertArgs>(args: SelectSubset<T, carte_categorieUpsertArgs<ExtArgs>>): Prisma__carte_categorieClient<$Result.GetResult<Prisma.$carte_categoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carte_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieCountArgs} args - Arguments to filter Carte_categories to count.
     * @example
     * // Count the number of Carte_categories
     * const count = await prisma.carte_categorie.count({
     *   where: {
     *     // ... the filter for the Carte_categories we want to count
     *   }
     * })
    **/
    count<T extends carte_categorieCountArgs>(
      args?: Subset<T, carte_categorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Carte_categorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carte_categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Carte_categorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Carte_categorieAggregateArgs>(args: Subset<T, Carte_categorieAggregateArgs>): Prisma.PrismaPromise<GetCarte_categorieAggregateType<T>>

    /**
     * Group by Carte_categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carte_categorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carte_categorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carte_categorieGroupByArgs['orderBy'] }
        : { orderBy?: carte_categorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carte_categorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarte_categorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carte_categorie model
   */
  readonly fields: carte_categorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carte_categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carte_categorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carte<T extends carteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carteDefaultArgs<ExtArgs>>): Prisma__carteClient<$Result.GetResult<Prisma.$cartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorie<T extends categorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categorieDefaultArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carte_categorie model
   */
  interface carte_categorieFieldRefs {
    readonly id: FieldRef<"carte_categorie", 'Int'>
    readonly carteId: FieldRef<"carte_categorie", 'Int'>
    readonly categorieId: FieldRef<"carte_categorie", 'Int'>
    readonly created_At: FieldRef<"carte_categorie", 'DateTime'>
    readonly updated_At: FieldRef<"carte_categorie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carte_categorie findUnique
   */
  export type carte_categorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter, which carte_categorie to fetch.
     */
    where: carte_categorieWhereUniqueInput
  }

  /**
   * carte_categorie findUniqueOrThrow
   */
  export type carte_categorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter, which carte_categorie to fetch.
     */
    where: carte_categorieWhereUniqueInput
  }

  /**
   * carte_categorie findFirst
   */
  export type carte_categorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter, which carte_categorie to fetch.
     */
    where?: carte_categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carte_categories to fetch.
     */
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carte_categories.
     */
    cursor?: carte_categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carte_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carte_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carte_categories.
     */
    distinct?: Carte_categorieScalarFieldEnum | Carte_categorieScalarFieldEnum[]
  }

  /**
   * carte_categorie findFirstOrThrow
   */
  export type carte_categorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter, which carte_categorie to fetch.
     */
    where?: carte_categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carte_categories to fetch.
     */
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carte_categories.
     */
    cursor?: carte_categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carte_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carte_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carte_categories.
     */
    distinct?: Carte_categorieScalarFieldEnum | Carte_categorieScalarFieldEnum[]
  }

  /**
   * carte_categorie findMany
   */
  export type carte_categorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter, which carte_categories to fetch.
     */
    where?: carte_categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carte_categories to fetch.
     */
    orderBy?: carte_categorieOrderByWithRelationInput | carte_categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carte_categories.
     */
    cursor?: carte_categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carte_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carte_categories.
     */
    skip?: number
    distinct?: Carte_categorieScalarFieldEnum | Carte_categorieScalarFieldEnum[]
  }

  /**
   * carte_categorie create
   */
  export type carte_categorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * The data needed to create a carte_categorie.
     */
    data: XOR<carte_categorieCreateInput, carte_categorieUncheckedCreateInput>
  }

  /**
   * carte_categorie createMany
   */
  export type carte_categorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carte_categories.
     */
    data: carte_categorieCreateManyInput | carte_categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carte_categorie createManyAndReturn
   */
  export type carte_categorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * The data used to create many carte_categories.
     */
    data: carte_categorieCreateManyInput | carte_categorieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carte_categorie update
   */
  export type carte_categorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * The data needed to update a carte_categorie.
     */
    data: XOR<carte_categorieUpdateInput, carte_categorieUncheckedUpdateInput>
    /**
     * Choose, which carte_categorie to update.
     */
    where: carte_categorieWhereUniqueInput
  }

  /**
   * carte_categorie updateMany
   */
  export type carte_categorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carte_categories.
     */
    data: XOR<carte_categorieUpdateManyMutationInput, carte_categorieUncheckedUpdateManyInput>
    /**
     * Filter which carte_categories to update
     */
    where?: carte_categorieWhereInput
    /**
     * Limit how many carte_categories to update.
     */
    limit?: number
  }

  /**
   * carte_categorie updateManyAndReturn
   */
  export type carte_categorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * The data used to update carte_categories.
     */
    data: XOR<carte_categorieUpdateManyMutationInput, carte_categorieUncheckedUpdateManyInput>
    /**
     * Filter which carte_categories to update
     */
    where?: carte_categorieWhereInput
    /**
     * Limit how many carte_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carte_categorie upsert
   */
  export type carte_categorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * The filter to search for the carte_categorie to update in case it exists.
     */
    where: carte_categorieWhereUniqueInput
    /**
     * In case the carte_categorie found by the `where` argument doesn't exist, create a new carte_categorie with this data.
     */
    create: XOR<carte_categorieCreateInput, carte_categorieUncheckedCreateInput>
    /**
     * In case the carte_categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carte_categorieUpdateInput, carte_categorieUncheckedUpdateInput>
  }

  /**
   * carte_categorie delete
   */
  export type carte_categorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
    /**
     * Filter which carte_categorie to delete.
     */
    where: carte_categorieWhereUniqueInput
  }

  /**
   * carte_categorie deleteMany
   */
  export type carte_categorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carte_categories to delete
     */
    where?: carte_categorieWhereInput
    /**
     * Limit how many carte_categories to delete.
     */
    limit?: number
  }

  /**
   * carte_categorie without action
   */
  export type carte_categorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carte_categorie
     */
    select?: carte_categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carte_categorie
     */
    omit?: carte_categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carte_categorieInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    userId: 'userId',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ColonneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    position: 'position',
    created_At: 'created_At',
    updated_At: 'updated_At'
  };

  export type ColonneScalarFieldEnum = (typeof ColonneScalarFieldEnum)[keyof typeof ColonneScalarFieldEnum]


  export const CarteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    position: 'position',
    colonneId: 'colonneId',
    start_date: 'start_date',
    end_date: 'end_date',
    created_At: 'created_At',
    updated_At: 'updated_At'
  };

  export type CarteScalarFieldEnum = (typeof CarteScalarFieldEnum)[keyof typeof CarteScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    created_At: 'created_At',
    updated_At: 'updated_At'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const Carte_categorieScalarFieldEnum: {
    id: 'id',
    carteId: 'carteId',
    categorieId: 'categorieId',
    created_At: 'created_At',
    updated_At: 'updated_At'
  };

  export type Carte_categorieScalarFieldEnum = (typeof Carte_categorieScalarFieldEnum)[keyof typeof Carte_categorieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
    project?: ProjectListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votes?: voteOrderByRelationAggregateInput
    comments?: commentOrderByRelationAggregateInput
    project?: projectOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
    project?: ProjectListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    title?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdById?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, userWhereInput>
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: userOrderByWithRelationInput
    votes?: voteOrderByRelationAggregateInput
    comments?: commentOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    title?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdById?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, userWhereInput>
    votes?: VoteListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    title?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    createdById?: IntWithAggregatesFilter<"project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type voteWhereInput = {
    AND?: voteWhereInput | voteWhereInput[]
    OR?: voteWhereInput[]
    NOT?: voteWhereInput | voteWhereInput[]
    id?: IntFilter<"vote"> | number
    userId?: IntFilter<"vote"> | number
    projectId?: IntFilter<"vote"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type voteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    user?: userOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type voteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: voteWhereInput | voteWhereInput[]
    OR?: voteWhereInput[]
    NOT?: voteWhereInput | voteWhereInput[]
    userId?: IntFilter<"vote"> | number
    projectId?: IntFilter<"vote"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type voteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    _count?: voteCountOrderByAggregateInput
    _avg?: voteAvgOrderByAggregateInput
    _max?: voteMaxOrderByAggregateInput
    _min?: voteMinOrderByAggregateInput
    _sum?: voteSumOrderByAggregateInput
  }

  export type voteScalarWhereWithAggregatesInput = {
    AND?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[]
    OR?: voteScalarWhereWithAggregatesInput[]
    NOT?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vote"> | number
    userId?: IntWithAggregatesFilter<"vote"> | number
    projectId?: IntWithAggregatesFilter<"vote"> | number
  }

  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: IntFilter<"comment"> | number
    text?: StringFilter<"comment"> | string
    userId?: IntFilter<"comment"> | number
    projectId?: IntFilter<"comment"> | number
    createdAt?: DateTimeFilter<"comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    text?: StringFilter<"comment"> | string
    userId?: IntFilter<"comment"> | number
    projectId?: IntFilter<"comment"> | number
    createdAt?: DateTimeFilter<"comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _avg?: commentAvgOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
    _sum?: commentSumOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comment"> | number
    text?: StringWithAggregatesFilter<"comment"> | string
    userId?: IntWithAggregatesFilter<"comment"> | number
    projectId?: IntWithAggregatesFilter<"comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
  }

  export type colonneWhereInput = {
    AND?: colonneWhereInput | colonneWhereInput[]
    OR?: colonneWhereInput[]
    NOT?: colonneWhereInput | colonneWhereInput[]
    id?: IntFilter<"colonne"> | number
    name?: StringFilter<"colonne"> | string
    description?: StringFilter<"colonne"> | string
    position?: IntFilter<"colonne"> | number
    created_At?: DateTimeFilter<"colonne"> | Date | string
    updated_At?: DateTimeFilter<"colonne"> | Date | string
    cartes?: CarteListRelationFilter
  }

  export type colonneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    cartes?: carteOrderByRelationAggregateInput
  }

  export type colonneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: colonneWhereInput | colonneWhereInput[]
    OR?: colonneWhereInput[]
    NOT?: colonneWhereInput | colonneWhereInput[]
    description?: StringFilter<"colonne"> | string
    position?: IntFilter<"colonne"> | number
    created_At?: DateTimeFilter<"colonne"> | Date | string
    updated_At?: DateTimeFilter<"colonne"> | Date | string
    cartes?: CarteListRelationFilter
  }, "id" | "name">

  export type colonneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    _count?: colonneCountOrderByAggregateInput
    _avg?: colonneAvgOrderByAggregateInput
    _max?: colonneMaxOrderByAggregateInput
    _min?: colonneMinOrderByAggregateInput
    _sum?: colonneSumOrderByAggregateInput
  }

  export type colonneScalarWhereWithAggregatesInput = {
    AND?: colonneScalarWhereWithAggregatesInput | colonneScalarWhereWithAggregatesInput[]
    OR?: colonneScalarWhereWithAggregatesInput[]
    NOT?: colonneScalarWhereWithAggregatesInput | colonneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"colonne"> | number
    name?: StringWithAggregatesFilter<"colonne"> | string
    description?: StringWithAggregatesFilter<"colonne"> | string
    position?: IntWithAggregatesFilter<"colonne"> | number
    created_At?: DateTimeWithAggregatesFilter<"colonne"> | Date | string
    updated_At?: DateTimeWithAggregatesFilter<"colonne"> | Date | string
  }

  export type carteWhereInput = {
    AND?: carteWhereInput | carteWhereInput[]
    OR?: carteWhereInput[]
    NOT?: carteWhereInput | carteWhereInput[]
    id?: IntFilter<"carte"> | number
    name?: StringFilter<"carte"> | string
    description?: StringFilter<"carte"> | string
    position?: IntFilter<"carte"> | number
    colonneId?: IntNullableFilter<"carte"> | number | null
    start_date?: DateTimeFilter<"carte"> | Date | string
    end_date?: DateTimeFilter<"carte"> | Date | string
    created_At?: DateTimeFilter<"carte"> | Date | string
    updated_At?: DateTimeFilter<"carte"> | Date | string
    Colonne?: XOR<ColonneNullableScalarRelationFilter, colonneWhereInput> | null
    carte_categorie?: Carte_categorieListRelationFilter
  }

  export type carteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    colonneId?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    Colonne?: colonneOrderByWithRelationInput
    carte_categorie?: carte_categorieOrderByRelationAggregateInput
  }

  export type carteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: carteWhereInput | carteWhereInput[]
    OR?: carteWhereInput[]
    NOT?: carteWhereInput | carteWhereInput[]
    description?: StringFilter<"carte"> | string
    position?: IntFilter<"carte"> | number
    colonneId?: IntNullableFilter<"carte"> | number | null
    start_date?: DateTimeFilter<"carte"> | Date | string
    end_date?: DateTimeFilter<"carte"> | Date | string
    created_At?: DateTimeFilter<"carte"> | Date | string
    updated_At?: DateTimeFilter<"carte"> | Date | string
    Colonne?: XOR<ColonneNullableScalarRelationFilter, colonneWhereInput> | null
    carte_categorie?: Carte_categorieListRelationFilter
  }, "id" | "name">

  export type carteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    colonneId?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    _count?: carteCountOrderByAggregateInput
    _avg?: carteAvgOrderByAggregateInput
    _max?: carteMaxOrderByAggregateInput
    _min?: carteMinOrderByAggregateInput
    _sum?: carteSumOrderByAggregateInput
  }

  export type carteScalarWhereWithAggregatesInput = {
    AND?: carteScalarWhereWithAggregatesInput | carteScalarWhereWithAggregatesInput[]
    OR?: carteScalarWhereWithAggregatesInput[]
    NOT?: carteScalarWhereWithAggregatesInput | carteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carte"> | number
    name?: StringWithAggregatesFilter<"carte"> | string
    description?: StringWithAggregatesFilter<"carte"> | string
    position?: IntWithAggregatesFilter<"carte"> | number
    colonneId?: IntNullableWithAggregatesFilter<"carte"> | number | null
    start_date?: DateTimeWithAggregatesFilter<"carte"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"carte"> | Date | string
    created_At?: DateTimeWithAggregatesFilter<"carte"> | Date | string
    updated_At?: DateTimeWithAggregatesFilter<"carte"> | Date | string
  }

  export type categorieWhereInput = {
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    id?: IntFilter<"categorie"> | number
    nom?: StringFilter<"categorie"> | string
    created_At?: DateTimeFilter<"categorie"> | Date | string
    updated_At?: DateTimeFilter<"categorie"> | Date | string
    carte_categorie?: Carte_categorieListRelationFilter
  }

  export type categorieOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    carte_categorie?: carte_categorieOrderByRelationAggregateInput
  }

  export type categorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    created_At?: DateTimeFilter<"categorie"> | Date | string
    updated_At?: DateTimeFilter<"categorie"> | Date | string
    carte_categorie?: Carte_categorieListRelationFilter
  }, "id" | "nom">

  export type categorieOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    _count?: categorieCountOrderByAggregateInput
    _avg?: categorieAvgOrderByAggregateInput
    _max?: categorieMaxOrderByAggregateInput
    _min?: categorieMinOrderByAggregateInput
    _sum?: categorieSumOrderByAggregateInput
  }

  export type categorieScalarWhereWithAggregatesInput = {
    AND?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    OR?: categorieScalarWhereWithAggregatesInput[]
    NOT?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorie"> | number
    nom?: StringWithAggregatesFilter<"categorie"> | string
    created_At?: DateTimeWithAggregatesFilter<"categorie"> | Date | string
    updated_At?: DateTimeWithAggregatesFilter<"categorie"> | Date | string
  }

  export type carte_categorieWhereInput = {
    AND?: carte_categorieWhereInput | carte_categorieWhereInput[]
    OR?: carte_categorieWhereInput[]
    NOT?: carte_categorieWhereInput | carte_categorieWhereInput[]
    id?: IntFilter<"carte_categorie"> | number
    carteId?: IntFilter<"carte_categorie"> | number
    categorieId?: IntFilter<"carte_categorie"> | number
    created_At?: DateTimeFilter<"carte_categorie"> | Date | string
    updated_At?: DateTimeFilter<"carte_categorie"> | Date | string
    carte?: XOR<CarteScalarRelationFilter, carteWhereInput>
    categorie?: XOR<CategorieScalarRelationFilter, categorieWhereInput>
  }

  export type carte_categorieOrderByWithRelationInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    carte?: carteOrderByWithRelationInput
    categorie?: categorieOrderByWithRelationInput
  }

  export type carte_categorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carte_categorieWhereInput | carte_categorieWhereInput[]
    OR?: carte_categorieWhereInput[]
    NOT?: carte_categorieWhereInput | carte_categorieWhereInput[]
    carteId?: IntFilter<"carte_categorie"> | number
    categorieId?: IntFilter<"carte_categorie"> | number
    created_At?: DateTimeFilter<"carte_categorie"> | Date | string
    updated_At?: DateTimeFilter<"carte_categorie"> | Date | string
    carte?: XOR<CarteScalarRelationFilter, carteWhereInput>
    categorie?: XOR<CategorieScalarRelationFilter, categorieWhereInput>
  }, "id">

  export type carte_categorieOrderByWithAggregationInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    _count?: carte_categorieCountOrderByAggregateInput
    _avg?: carte_categorieAvgOrderByAggregateInput
    _max?: carte_categorieMaxOrderByAggregateInput
    _min?: carte_categorieMinOrderByAggregateInput
    _sum?: carte_categorieSumOrderByAggregateInput
  }

  export type carte_categorieScalarWhereWithAggregatesInput = {
    AND?: carte_categorieScalarWhereWithAggregatesInput | carte_categorieScalarWhereWithAggregatesInput[]
    OR?: carte_categorieScalarWhereWithAggregatesInput[]
    NOT?: carte_categorieScalarWhereWithAggregatesInput | carte_categorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carte_categorie"> | number
    carteId?: IntWithAggregatesFilter<"carte_categorie"> | number
    categorieId?: IntWithAggregatesFilter<"carte_categorie"> | number
    created_At?: DateTimeWithAggregatesFilter<"carte_categorie"> | Date | string
    updated_At?: DateTimeWithAggregatesFilter<"carte_categorie"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
    project?: projectCreateNestedManyWithoutCreatedByInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    project?: projectUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
    project?: projectUpdateManyWithoutCreatedByNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    project?: projectUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: userCreateNestedOneWithoutProjectInput
    votes?: voteCreateNestedManyWithoutProjectInput
    comments?: commentCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutProjectInput
    comments?: commentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneRequiredWithoutProjectNestedInput
    votes?: voteUpdateManyWithoutProjectNestedInput
    comments?: commentUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutProjectNestedInput
    comments?: commentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voteCreateInput = {
    user: userCreateNestedOneWithoutVotesInput
    project: projectCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateInput = {
    id?: number
    userId: number
    projectId: number
  }

  export type voteUpdateInput = {
    user?: userUpdateOneRequiredWithoutVotesNestedInput
    project?: projectUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type voteCreateManyInput = {
    id?: number
    userId: number
    projectId: number
  }

  export type voteUpdateManyMutationInput = {

  }

  export type voteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type commentCreateInput = {
    text: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutCommentsInput
    project: projectCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateInput = {
    id?: number
    text: string
    userId: number
    projectId: number
    createdAt?: Date | string
  }

  export type commentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCommentsNestedInput
    project?: projectUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyInput = {
    id?: number
    text: string
    userId: number
    projectId: number
    createdAt?: Date | string
  }

  export type commentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type colonneCreateInput = {
    name: string
    description: string
    position?: number
    created_At?: Date | string
    updated_At?: Date | string
    cartes?: carteCreateNestedManyWithoutColonneInput
  }

  export type colonneUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    position?: number
    created_At?: Date | string
    updated_At?: Date | string
    cartes?: carteUncheckedCreateNestedManyWithoutColonneInput
  }

  export type colonneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    cartes?: carteUpdateManyWithoutColonneNestedInput
  }

  export type colonneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    cartes?: carteUncheckedUpdateManyWithoutColonneNestedInput
  }

  export type colonneCreateManyInput = {
    id?: number
    name: string
    description: string
    position?: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type colonneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type colonneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carteCreateInput = {
    name: string
    description: string
    position?: number
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
    Colonne?: colonneCreateNestedOneWithoutCartesInput
    carte_categorie?: carte_categorieCreateNestedManyWithoutCarteInput
  }

  export type carteUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    position?: number
    colonneId?: number | null
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
    carte_categorie?: carte_categorieUncheckedCreateNestedManyWithoutCarteInput
  }

  export type carteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    Colonne?: colonneUpdateOneWithoutCartesNestedInput
    carte_categorie?: carte_categorieUpdateManyWithoutCarteNestedInput
  }

  export type carteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    colonneId?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte_categorie?: carte_categorieUncheckedUpdateManyWithoutCarteNestedInput
  }

  export type carteCreateManyInput = {
    id?: number
    name: string
    description: string
    position?: number
    colonneId?: number | null
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    colonneId?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categorieCreateInput = {
    nom: string
    created_At?: Date | string
    updated_At?: Date | string
    carte_categorie?: carte_categorieCreateNestedManyWithoutCategorieInput
  }

  export type categorieUncheckedCreateInput = {
    id?: number
    nom: string
    created_At?: Date | string
    updated_At?: Date | string
    carte_categorie?: carte_categorieUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categorieUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte_categorie?: carte_categorieUpdateManyWithoutCategorieNestedInput
  }

  export type categorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte_categorie?: carte_categorieUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type categorieCreateManyInput = {
    id?: number
    nom: string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type categorieUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieCreateInput = {
    created_At?: Date | string
    updated_At?: Date | string
    carte: carteCreateNestedOneWithoutCarte_categorieInput
    categorie: categorieCreateNestedOneWithoutCarte_categorieInput
  }

  export type carte_categorieUncheckedCreateInput = {
    id?: number
    carteId: number
    categorieId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieUpdateInput = {
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte?: carteUpdateOneRequiredWithoutCarte_categorieNestedInput
    categorie?: categorieUpdateOneRequiredWithoutCarte_categorieNestedInput
  }

  export type carte_categorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieCreateManyInput = {
    id?: number
    carteId: number
    categorieId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieUpdateManyMutationInput = {
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VoteListRelationFilter = {
    every?: voteWhereInput
    some?: voteWhereInput
    none?: voteWhereInput
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type voteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type voteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type voteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type voteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type voteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type voteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type commentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type CarteListRelationFilter = {
    every?: carteWhereInput
    some?: carteWhereInput
    none?: carteWhereInput
  }

  export type carteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type colonneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type colonneAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
  }

  export type colonneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type colonneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type colonneSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ColonneNullableScalarRelationFilter = {
    is?: colonneWhereInput | null
    isNot?: colonneWhereInput | null
  }

  export type Carte_categorieListRelationFilter = {
    every?: carte_categorieWhereInput
    some?: carte_categorieWhereInput
    none?: carte_categorieWhereInput
  }

  export type carte_categorieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    colonneId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carteAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    colonneId?: SortOrder
  }

  export type carteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    colonneId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    position?: SortOrder
    colonneId?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carteSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    colonneId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type categorieCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type categorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type categorieMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type categorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarteScalarRelationFilter = {
    is?: carteWhereInput
    isNot?: carteWhereInput
  }

  export type CategorieScalarRelationFilter = {
    is?: categorieWhereInput
    isNot?: categorieWhereInput
  }

  export type carte_categorieCountOrderByAggregateInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carte_categorieAvgOrderByAggregateInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
  }

  export type carte_categorieMaxOrderByAggregateInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carte_categorieMinOrderByAggregateInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type carte_categorieSumOrderByAggregateInput = {
    id?: SortOrder
    carteId?: SortOrder
    categorieId?: SortOrder
  }

  export type voteCreateNestedManyWithoutUserInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type projectCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput> | projectCreateWithoutCreatedByInput[] | projectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: projectCreateOrConnectWithoutCreatedByInput | projectCreateOrConnectWithoutCreatedByInput[]
    createMany?: projectCreateManyCreatedByInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type voteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput> | projectCreateWithoutCreatedByInput[] | projectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: projectCreateOrConnectWithoutCreatedByInput | projectCreateOrConnectWithoutCreatedByInput[]
    createMany?: projectCreateManyCreatedByInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type voteUpdateManyWithoutUserNestedInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type projectUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput> | projectCreateWithoutCreatedByInput[] | projectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: projectCreateOrConnectWithoutCreatedByInput | projectCreateOrConnectWithoutCreatedByInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutCreatedByInput | projectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: projectCreateManyCreatedByInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutCreatedByInput | projectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: projectUpdateManyWithWhereWithoutCreatedByInput | projectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type voteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput> | projectCreateWithoutCreatedByInput[] | projectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: projectCreateOrConnectWithoutCreatedByInput | projectCreateOrConnectWithoutCreatedByInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutCreatedByInput | projectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: projectCreateManyCreatedByInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutCreatedByInput | projectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: projectUpdateManyWithWhereWithoutCreatedByInput | projectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    connect?: userWhereUniqueInput
  }

  export type voteCreateNestedManyWithoutProjectInput = {
    create?: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput> | voteCreateWithoutProjectInput[] | voteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: voteCreateOrConnectWithoutProjectInput | voteCreateOrConnectWithoutProjectInput[]
    createMany?: voteCreateManyProjectInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type commentCreateNestedManyWithoutProjectInput = {
    create?: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput> | commentCreateWithoutProjectInput[] | commentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentCreateOrConnectWithoutProjectInput | commentCreateOrConnectWithoutProjectInput[]
    createMany?: commentCreateManyProjectInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type voteUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput> | voteCreateWithoutProjectInput[] | voteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: voteCreateOrConnectWithoutProjectInput | voteCreateOrConnectWithoutProjectInput[]
    createMany?: voteCreateManyProjectInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput> | commentCreateWithoutProjectInput[] | commentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentCreateOrConnectWithoutProjectInput | commentCreateOrConnectWithoutProjectInput[]
    createMany?: commentCreateManyProjectInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    upsert?: userUpsertWithoutProjectInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>, userUncheckedUpdateWithoutProjectInput>
  }

  export type voteUpdateManyWithoutProjectNestedInput = {
    create?: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput> | voteCreateWithoutProjectInput[] | voteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: voteCreateOrConnectWithoutProjectInput | voteCreateOrConnectWithoutProjectInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutProjectInput | voteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: voteCreateManyProjectInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutProjectInput | voteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: voteUpdateManyWithWhereWithoutProjectInput | voteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type commentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput> | commentCreateWithoutProjectInput[] | commentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentCreateOrConnectWithoutProjectInput | commentCreateOrConnectWithoutProjectInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutProjectInput | commentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: commentCreateManyProjectInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutProjectInput | commentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: commentUpdateManyWithWhereWithoutProjectInput | commentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type voteUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput> | voteCreateWithoutProjectInput[] | voteUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: voteCreateOrConnectWithoutProjectInput | voteCreateOrConnectWithoutProjectInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutProjectInput | voteUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: voteCreateManyProjectInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutProjectInput | voteUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: voteUpdateManyWithWhereWithoutProjectInput | voteUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput> | commentCreateWithoutProjectInput[] | commentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentCreateOrConnectWithoutProjectInput | commentCreateOrConnectWithoutProjectInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutProjectInput | commentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: commentCreateManyProjectInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutProjectInput | commentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: commentUpdateManyWithWhereWithoutProjectInput | commentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutVotesInput = {
    create?: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    connectOrCreate?: userCreateOrConnectWithoutVotesInput
    connect?: userWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutVotesInput = {
    create?: XOR<projectCreateWithoutVotesInput, projectUncheckedCreateWithoutVotesInput>
    connectOrCreate?: projectCreateOrConnectWithoutVotesInput
    connect?: projectWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    connectOrCreate?: userCreateOrConnectWithoutVotesInput
    upsert?: userUpsertWithoutVotesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutVotesInput, userUpdateWithoutVotesInput>, userUncheckedUpdateWithoutVotesInput>
  }

  export type projectUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<projectCreateWithoutVotesInput, projectUncheckedCreateWithoutVotesInput>
    connectOrCreate?: projectCreateOrConnectWithoutVotesInput
    upsert?: projectUpsertWithoutVotesInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutVotesInput, projectUpdateWithoutVotesInput>, projectUncheckedUpdateWithoutVotesInput>
  }

  export type userCreateNestedOneWithoutCommentsInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    connect?: userWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutCommentsInput = {
    create?: XOR<projectCreateWithoutCommentsInput, projectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: projectCreateOrConnectWithoutCommentsInput
    connect?: projectWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    upsert?: userUpsertWithoutCommentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCommentsInput, userUpdateWithoutCommentsInput>, userUncheckedUpdateWithoutCommentsInput>
  }

  export type projectUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<projectCreateWithoutCommentsInput, projectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: projectCreateOrConnectWithoutCommentsInput
    upsert?: projectUpsertWithoutCommentsInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutCommentsInput, projectUpdateWithoutCommentsInput>, projectUncheckedUpdateWithoutCommentsInput>
  }

  export type carteCreateNestedManyWithoutColonneInput = {
    create?: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput> | carteCreateWithoutColonneInput[] | carteUncheckedCreateWithoutColonneInput[]
    connectOrCreate?: carteCreateOrConnectWithoutColonneInput | carteCreateOrConnectWithoutColonneInput[]
    createMany?: carteCreateManyColonneInputEnvelope
    connect?: carteWhereUniqueInput | carteWhereUniqueInput[]
  }

  export type carteUncheckedCreateNestedManyWithoutColonneInput = {
    create?: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput> | carteCreateWithoutColonneInput[] | carteUncheckedCreateWithoutColonneInput[]
    connectOrCreate?: carteCreateOrConnectWithoutColonneInput | carteCreateOrConnectWithoutColonneInput[]
    createMany?: carteCreateManyColonneInputEnvelope
    connect?: carteWhereUniqueInput | carteWhereUniqueInput[]
  }

  export type carteUpdateManyWithoutColonneNestedInput = {
    create?: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput> | carteCreateWithoutColonneInput[] | carteUncheckedCreateWithoutColonneInput[]
    connectOrCreate?: carteCreateOrConnectWithoutColonneInput | carteCreateOrConnectWithoutColonneInput[]
    upsert?: carteUpsertWithWhereUniqueWithoutColonneInput | carteUpsertWithWhereUniqueWithoutColonneInput[]
    createMany?: carteCreateManyColonneInputEnvelope
    set?: carteWhereUniqueInput | carteWhereUniqueInput[]
    disconnect?: carteWhereUniqueInput | carteWhereUniqueInput[]
    delete?: carteWhereUniqueInput | carteWhereUniqueInput[]
    connect?: carteWhereUniqueInput | carteWhereUniqueInput[]
    update?: carteUpdateWithWhereUniqueWithoutColonneInput | carteUpdateWithWhereUniqueWithoutColonneInput[]
    updateMany?: carteUpdateManyWithWhereWithoutColonneInput | carteUpdateManyWithWhereWithoutColonneInput[]
    deleteMany?: carteScalarWhereInput | carteScalarWhereInput[]
  }

  export type carteUncheckedUpdateManyWithoutColonneNestedInput = {
    create?: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput> | carteCreateWithoutColonneInput[] | carteUncheckedCreateWithoutColonneInput[]
    connectOrCreate?: carteCreateOrConnectWithoutColonneInput | carteCreateOrConnectWithoutColonneInput[]
    upsert?: carteUpsertWithWhereUniqueWithoutColonneInput | carteUpsertWithWhereUniqueWithoutColonneInput[]
    createMany?: carteCreateManyColonneInputEnvelope
    set?: carteWhereUniqueInput | carteWhereUniqueInput[]
    disconnect?: carteWhereUniqueInput | carteWhereUniqueInput[]
    delete?: carteWhereUniqueInput | carteWhereUniqueInput[]
    connect?: carteWhereUniqueInput | carteWhereUniqueInput[]
    update?: carteUpdateWithWhereUniqueWithoutColonneInput | carteUpdateWithWhereUniqueWithoutColonneInput[]
    updateMany?: carteUpdateManyWithWhereWithoutColonneInput | carteUpdateManyWithWhereWithoutColonneInput[]
    deleteMany?: carteScalarWhereInput | carteScalarWhereInput[]
  }

  export type colonneCreateNestedOneWithoutCartesInput = {
    create?: XOR<colonneCreateWithoutCartesInput, colonneUncheckedCreateWithoutCartesInput>
    connectOrCreate?: colonneCreateOrConnectWithoutCartesInput
    connect?: colonneWhereUniqueInput
  }

  export type carte_categorieCreateNestedManyWithoutCarteInput = {
    create?: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput> | carte_categorieCreateWithoutCarteInput[] | carte_categorieUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCarteInput | carte_categorieCreateOrConnectWithoutCarteInput[]
    createMany?: carte_categorieCreateManyCarteInputEnvelope
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
  }

  export type carte_categorieUncheckedCreateNestedManyWithoutCarteInput = {
    create?: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput> | carte_categorieCreateWithoutCarteInput[] | carte_categorieUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCarteInput | carte_categorieCreateOrConnectWithoutCarteInput[]
    createMany?: carte_categorieCreateManyCarteInputEnvelope
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
  }

  export type colonneUpdateOneWithoutCartesNestedInput = {
    create?: XOR<colonneCreateWithoutCartesInput, colonneUncheckedCreateWithoutCartesInput>
    connectOrCreate?: colonneCreateOrConnectWithoutCartesInput
    upsert?: colonneUpsertWithoutCartesInput
    disconnect?: colonneWhereInput | boolean
    delete?: colonneWhereInput | boolean
    connect?: colonneWhereUniqueInput
    update?: XOR<XOR<colonneUpdateToOneWithWhereWithoutCartesInput, colonneUpdateWithoutCartesInput>, colonneUncheckedUpdateWithoutCartesInput>
  }

  export type carte_categorieUpdateManyWithoutCarteNestedInput = {
    create?: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput> | carte_categorieCreateWithoutCarteInput[] | carte_categorieUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCarteInput | carte_categorieCreateOrConnectWithoutCarteInput[]
    upsert?: carte_categorieUpsertWithWhereUniqueWithoutCarteInput | carte_categorieUpsertWithWhereUniqueWithoutCarteInput[]
    createMany?: carte_categorieCreateManyCarteInputEnvelope
    set?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    disconnect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    delete?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    update?: carte_categorieUpdateWithWhereUniqueWithoutCarteInput | carte_categorieUpdateWithWhereUniqueWithoutCarteInput[]
    updateMany?: carte_categorieUpdateManyWithWhereWithoutCarteInput | carte_categorieUpdateManyWithWhereWithoutCarteInput[]
    deleteMany?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type carte_categorieUncheckedUpdateManyWithoutCarteNestedInput = {
    create?: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput> | carte_categorieCreateWithoutCarteInput[] | carte_categorieUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCarteInput | carte_categorieCreateOrConnectWithoutCarteInput[]
    upsert?: carte_categorieUpsertWithWhereUniqueWithoutCarteInput | carte_categorieUpsertWithWhereUniqueWithoutCarteInput[]
    createMany?: carte_categorieCreateManyCarteInputEnvelope
    set?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    disconnect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    delete?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    update?: carte_categorieUpdateWithWhereUniqueWithoutCarteInput | carte_categorieUpdateWithWhereUniqueWithoutCarteInput[]
    updateMany?: carte_categorieUpdateManyWithWhereWithoutCarteInput | carte_categorieUpdateManyWithWhereWithoutCarteInput[]
    deleteMany?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
  }

  export type carte_categorieCreateNestedManyWithoutCategorieInput = {
    create?: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput> | carte_categorieCreateWithoutCategorieInput[] | carte_categorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCategorieInput | carte_categorieCreateOrConnectWithoutCategorieInput[]
    createMany?: carte_categorieCreateManyCategorieInputEnvelope
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
  }

  export type carte_categorieUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput> | carte_categorieCreateWithoutCategorieInput[] | carte_categorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCategorieInput | carte_categorieCreateOrConnectWithoutCategorieInput[]
    createMany?: carte_categorieCreateManyCategorieInputEnvelope
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
  }

  export type carte_categorieUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput> | carte_categorieCreateWithoutCategorieInput[] | carte_categorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCategorieInput | carte_categorieCreateOrConnectWithoutCategorieInput[]
    upsert?: carte_categorieUpsertWithWhereUniqueWithoutCategorieInput | carte_categorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: carte_categorieCreateManyCategorieInputEnvelope
    set?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    disconnect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    delete?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    update?: carte_categorieUpdateWithWhereUniqueWithoutCategorieInput | carte_categorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: carte_categorieUpdateManyWithWhereWithoutCategorieInput | carte_categorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
  }

  export type carte_categorieUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput> | carte_categorieCreateWithoutCategorieInput[] | carte_categorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: carte_categorieCreateOrConnectWithoutCategorieInput | carte_categorieCreateOrConnectWithoutCategorieInput[]
    upsert?: carte_categorieUpsertWithWhereUniqueWithoutCategorieInput | carte_categorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: carte_categorieCreateManyCategorieInputEnvelope
    set?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    disconnect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    delete?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    connect?: carte_categorieWhereUniqueInput | carte_categorieWhereUniqueInput[]
    update?: carte_categorieUpdateWithWhereUniqueWithoutCategorieInput | carte_categorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: carte_categorieUpdateManyWithWhereWithoutCategorieInput | carte_categorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
  }

  export type carteCreateNestedOneWithoutCarte_categorieInput = {
    create?: XOR<carteCreateWithoutCarte_categorieInput, carteUncheckedCreateWithoutCarte_categorieInput>
    connectOrCreate?: carteCreateOrConnectWithoutCarte_categorieInput
    connect?: carteWhereUniqueInput
  }

  export type categorieCreateNestedOneWithoutCarte_categorieInput = {
    create?: XOR<categorieCreateWithoutCarte_categorieInput, categorieUncheckedCreateWithoutCarte_categorieInput>
    connectOrCreate?: categorieCreateOrConnectWithoutCarte_categorieInput
    connect?: categorieWhereUniqueInput
  }

  export type carteUpdateOneRequiredWithoutCarte_categorieNestedInput = {
    create?: XOR<carteCreateWithoutCarte_categorieInput, carteUncheckedCreateWithoutCarte_categorieInput>
    connectOrCreate?: carteCreateOrConnectWithoutCarte_categorieInput
    upsert?: carteUpsertWithoutCarte_categorieInput
    connect?: carteWhereUniqueInput
    update?: XOR<XOR<carteUpdateToOneWithWhereWithoutCarte_categorieInput, carteUpdateWithoutCarte_categorieInput>, carteUncheckedUpdateWithoutCarte_categorieInput>
  }

  export type categorieUpdateOneRequiredWithoutCarte_categorieNestedInput = {
    create?: XOR<categorieCreateWithoutCarte_categorieInput, categorieUncheckedCreateWithoutCarte_categorieInput>
    connectOrCreate?: categorieCreateOrConnectWithoutCarte_categorieInput
    upsert?: categorieUpsertWithoutCarte_categorieInput
    connect?: categorieWhereUniqueInput
    update?: XOR<XOR<categorieUpdateToOneWithWhereWithoutCarte_categorieInput, categorieUpdateWithoutCarte_categorieInput>, categorieUncheckedUpdateWithoutCarte_categorieInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type voteCreateWithoutUserInput = {
    project: projectCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
  }

  export type voteCreateOrConnectWithoutUserInput = {
    where: voteWhereUniqueInput
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
  }

  export type voteCreateManyUserInputEnvelope = {
    data: voteCreateManyUserInput | voteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutUserInput = {
    text: string
    createdAt?: Date | string
    project: projectCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id?: number
    text: string
    projectId: number
    createdAt?: Date | string
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: commentCreateManyUserInput | commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteCreateNestedManyWithoutProjectInput
    comments?: commentCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutProjectInput
    comments?: commentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutCreatedByInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput>
  }

  export type projectCreateManyCreatedByInputEnvelope = {
    data: projectCreateManyCreatedByInput | projectCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type voteUpsertWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput
    update: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
  }

  export type voteUpdateWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput
    data: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>
  }

  export type voteUpdateManyWithWhereWithoutUserInput = {
    where: voteScalarWhereInput
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutUserInput>
  }

  export type voteScalarWhereInput = {
    AND?: voteScalarWhereInput | voteScalarWhereInput[]
    OR?: voteScalarWhereInput[]
    NOT?: voteScalarWhereInput | voteScalarWhereInput[]
    id?: IntFilter<"vote"> | number
    userId?: IntFilter<"vote"> | number
    projectId?: IntFilter<"vote"> | number
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutUserInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: IntFilter<"comment"> | number
    text?: StringFilter<"comment"> | string
    userId?: IntFilter<"comment"> | number
    projectId?: IntFilter<"comment"> | number
    createdAt?: DateTimeFilter<"comment"> | Date | string
  }

  export type projectUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutCreatedByInput, projectUncheckedUpdateWithoutCreatedByInput>
    create: XOR<projectCreateWithoutCreatedByInput, projectUncheckedCreateWithoutCreatedByInput>
  }

  export type projectUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutCreatedByInput, projectUncheckedUpdateWithoutCreatedByInput>
  }

  export type projectUpdateManyWithWhereWithoutCreatedByInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: IntFilter<"project"> | number
    title?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    createdById?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }

  export type userCreateWithoutProjectInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
  }

  export type voteCreateWithoutProjectInput = {
    user: userCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
  }

  export type voteCreateOrConnectWithoutProjectInput = {
    where: voteWhereUniqueInput
    create: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput>
  }

  export type voteCreateManyProjectInputEnvelope = {
    data: voteCreateManyProjectInput | voteCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutProjectInput = {
    text: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutProjectInput = {
    id?: number
    text: string
    userId: number
    createdAt?: Date | string
  }

  export type commentCreateOrConnectWithoutProjectInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput>
  }

  export type commentCreateManyProjectInputEnvelope = {
    data: commentCreateManyProjectInput | commentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
  }

  export type userUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type voteUpsertWithWhereUniqueWithoutProjectInput = {
    where: voteWhereUniqueInput
    update: XOR<voteUpdateWithoutProjectInput, voteUncheckedUpdateWithoutProjectInput>
    create: XOR<voteCreateWithoutProjectInput, voteUncheckedCreateWithoutProjectInput>
  }

  export type voteUpdateWithWhereUniqueWithoutProjectInput = {
    where: voteWhereUniqueInput
    data: XOR<voteUpdateWithoutProjectInput, voteUncheckedUpdateWithoutProjectInput>
  }

  export type voteUpdateManyWithWhereWithoutProjectInput = {
    where: voteScalarWhereInput
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutProjectInput>
  }

  export type commentUpsertWithWhereUniqueWithoutProjectInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutProjectInput, commentUncheckedUpdateWithoutProjectInput>
    create: XOR<commentCreateWithoutProjectInput, commentUncheckedCreateWithoutProjectInput>
  }

  export type commentUpdateWithWhereUniqueWithoutProjectInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutProjectInput, commentUncheckedUpdateWithoutProjectInput>
  }

  export type commentUpdateManyWithWhereWithoutProjectInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutProjectInput>
  }

  export type userCreateWithoutVotesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: commentCreateNestedManyWithoutUserInput
    project?: projectCreateNestedManyWithoutCreatedByInput
  }

  export type userUncheckedCreateWithoutVotesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    project?: projectUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type userCreateOrConnectWithoutVotesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
  }

  export type projectCreateWithoutVotesInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: userCreateNestedOneWithoutProjectInput
    comments?: commentCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutVotesInput = {
    id?: number
    title: string
    description?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: commentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutVotesInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutVotesInput, projectUncheckedCreateWithoutVotesInput>
  }

  export type userUpsertWithoutVotesInput = {
    update: XOR<userUpdateWithoutVotesInput, userUncheckedUpdateWithoutVotesInput>
    create: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutVotesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutVotesInput, userUncheckedUpdateWithoutVotesInput>
  }

  export type userUpdateWithoutVotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentUpdateManyWithoutUserNestedInput
    project?: projectUpdateManyWithoutCreatedByNestedInput
  }

  export type userUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    project?: projectUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type projectUpsertWithoutVotesInput = {
    update: XOR<projectUpdateWithoutVotesInput, projectUncheckedUpdateWithoutVotesInput>
    create: XOR<projectCreateWithoutVotesInput, projectUncheckedCreateWithoutVotesInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutVotesInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutVotesInput, projectUncheckedUpdateWithoutVotesInput>
  }

  export type projectUpdateWithoutVotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneRequiredWithoutProjectNestedInput
    comments?: commentUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type userCreateWithoutCommentsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteCreateNestedManyWithoutUserInput
    project?: projectCreateNestedManyWithoutCreatedByInput
  }

  export type userUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutUserInput
    project?: projectUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type userCreateOrConnectWithoutCommentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
  }

  export type projectCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: userCreateNestedOneWithoutProjectInput
    votes?: voteCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: voteUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutCommentsInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutCommentsInput, projectUncheckedCreateWithoutCommentsInput>
  }

  export type userUpsertWithoutCommentsInput = {
    update: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCommentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
  }

  export type userUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUpdateManyWithoutUserNestedInput
    project?: projectUpdateManyWithoutCreatedByNestedInput
  }

  export type userUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutUserNestedInput
    project?: projectUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type projectUpsertWithoutCommentsInput = {
    update: XOR<projectUpdateWithoutCommentsInput, projectUncheckedUpdateWithoutCommentsInput>
    create: XOR<projectCreateWithoutCommentsInput, projectUncheckedCreateWithoutCommentsInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutCommentsInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutCommentsInput, projectUncheckedUpdateWithoutCommentsInput>
  }

  export type projectUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: userUpdateOneRequiredWithoutProjectNestedInput
    votes?: voteUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type carteCreateWithoutColonneInput = {
    name: string
    description: string
    position?: number
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
    carte_categorie?: carte_categorieCreateNestedManyWithoutCarteInput
  }

  export type carteUncheckedCreateWithoutColonneInput = {
    id?: number
    name: string
    description: string
    position?: number
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
    carte_categorie?: carte_categorieUncheckedCreateNestedManyWithoutCarteInput
  }

  export type carteCreateOrConnectWithoutColonneInput = {
    where: carteWhereUniqueInput
    create: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput>
  }

  export type carteCreateManyColonneInputEnvelope = {
    data: carteCreateManyColonneInput | carteCreateManyColonneInput[]
    skipDuplicates?: boolean
  }

  export type carteUpsertWithWhereUniqueWithoutColonneInput = {
    where: carteWhereUniqueInput
    update: XOR<carteUpdateWithoutColonneInput, carteUncheckedUpdateWithoutColonneInput>
    create: XOR<carteCreateWithoutColonneInput, carteUncheckedCreateWithoutColonneInput>
  }

  export type carteUpdateWithWhereUniqueWithoutColonneInput = {
    where: carteWhereUniqueInput
    data: XOR<carteUpdateWithoutColonneInput, carteUncheckedUpdateWithoutColonneInput>
  }

  export type carteUpdateManyWithWhereWithoutColonneInput = {
    where: carteScalarWhereInput
    data: XOR<carteUpdateManyMutationInput, carteUncheckedUpdateManyWithoutColonneInput>
  }

  export type carteScalarWhereInput = {
    AND?: carteScalarWhereInput | carteScalarWhereInput[]
    OR?: carteScalarWhereInput[]
    NOT?: carteScalarWhereInput | carteScalarWhereInput[]
    id?: IntFilter<"carte"> | number
    name?: StringFilter<"carte"> | string
    description?: StringFilter<"carte"> | string
    position?: IntFilter<"carte"> | number
    colonneId?: IntNullableFilter<"carte"> | number | null
    start_date?: DateTimeFilter<"carte"> | Date | string
    end_date?: DateTimeFilter<"carte"> | Date | string
    created_At?: DateTimeFilter<"carte"> | Date | string
    updated_At?: DateTimeFilter<"carte"> | Date | string
  }

  export type colonneCreateWithoutCartesInput = {
    name: string
    description: string
    position?: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type colonneUncheckedCreateWithoutCartesInput = {
    id?: number
    name: string
    description: string
    position?: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type colonneCreateOrConnectWithoutCartesInput = {
    where: colonneWhereUniqueInput
    create: XOR<colonneCreateWithoutCartesInput, colonneUncheckedCreateWithoutCartesInput>
  }

  export type carte_categorieCreateWithoutCarteInput = {
    created_At?: Date | string
    updated_At?: Date | string
    categorie: categorieCreateNestedOneWithoutCarte_categorieInput
  }

  export type carte_categorieUncheckedCreateWithoutCarteInput = {
    id?: number
    categorieId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieCreateOrConnectWithoutCarteInput = {
    where: carte_categorieWhereUniqueInput
    create: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput>
  }

  export type carte_categorieCreateManyCarteInputEnvelope = {
    data: carte_categorieCreateManyCarteInput | carte_categorieCreateManyCarteInput[]
    skipDuplicates?: boolean
  }

  export type colonneUpsertWithoutCartesInput = {
    update: XOR<colonneUpdateWithoutCartesInput, colonneUncheckedUpdateWithoutCartesInput>
    create: XOR<colonneCreateWithoutCartesInput, colonneUncheckedCreateWithoutCartesInput>
    where?: colonneWhereInput
  }

  export type colonneUpdateToOneWithWhereWithoutCartesInput = {
    where?: colonneWhereInput
    data: XOR<colonneUpdateWithoutCartesInput, colonneUncheckedUpdateWithoutCartesInput>
  }

  export type colonneUpdateWithoutCartesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type colonneUncheckedUpdateWithoutCartesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieUpsertWithWhereUniqueWithoutCarteInput = {
    where: carte_categorieWhereUniqueInput
    update: XOR<carte_categorieUpdateWithoutCarteInput, carte_categorieUncheckedUpdateWithoutCarteInput>
    create: XOR<carte_categorieCreateWithoutCarteInput, carte_categorieUncheckedCreateWithoutCarteInput>
  }

  export type carte_categorieUpdateWithWhereUniqueWithoutCarteInput = {
    where: carte_categorieWhereUniqueInput
    data: XOR<carte_categorieUpdateWithoutCarteInput, carte_categorieUncheckedUpdateWithoutCarteInput>
  }

  export type carte_categorieUpdateManyWithWhereWithoutCarteInput = {
    where: carte_categorieScalarWhereInput
    data: XOR<carte_categorieUpdateManyMutationInput, carte_categorieUncheckedUpdateManyWithoutCarteInput>
  }

  export type carte_categorieScalarWhereInput = {
    AND?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
    OR?: carte_categorieScalarWhereInput[]
    NOT?: carte_categorieScalarWhereInput | carte_categorieScalarWhereInput[]
    id?: IntFilter<"carte_categorie"> | number
    carteId?: IntFilter<"carte_categorie"> | number
    categorieId?: IntFilter<"carte_categorie"> | number
    created_At?: DateTimeFilter<"carte_categorie"> | Date | string
    updated_At?: DateTimeFilter<"carte_categorie"> | Date | string
  }

  export type carte_categorieCreateWithoutCategorieInput = {
    created_At?: Date | string
    updated_At?: Date | string
    carte: carteCreateNestedOneWithoutCarte_categorieInput
  }

  export type carte_categorieUncheckedCreateWithoutCategorieInput = {
    id?: number
    carteId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieCreateOrConnectWithoutCategorieInput = {
    where: carte_categorieWhereUniqueInput
    create: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput>
  }

  export type carte_categorieCreateManyCategorieInputEnvelope = {
    data: carte_categorieCreateManyCategorieInput | carte_categorieCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type carte_categorieUpsertWithWhereUniqueWithoutCategorieInput = {
    where: carte_categorieWhereUniqueInput
    update: XOR<carte_categorieUpdateWithoutCategorieInput, carte_categorieUncheckedUpdateWithoutCategorieInput>
    create: XOR<carte_categorieCreateWithoutCategorieInput, carte_categorieUncheckedCreateWithoutCategorieInput>
  }

  export type carte_categorieUpdateWithWhereUniqueWithoutCategorieInput = {
    where: carte_categorieWhereUniqueInput
    data: XOR<carte_categorieUpdateWithoutCategorieInput, carte_categorieUncheckedUpdateWithoutCategorieInput>
  }

  export type carte_categorieUpdateManyWithWhereWithoutCategorieInput = {
    where: carte_categorieScalarWhereInput
    data: XOR<carte_categorieUpdateManyMutationInput, carte_categorieUncheckedUpdateManyWithoutCategorieInput>
  }

  export type carteCreateWithoutCarte_categorieInput = {
    name: string
    description: string
    position?: number
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
    Colonne?: colonneCreateNestedOneWithoutCartesInput
  }

  export type carteUncheckedCreateWithoutCarte_categorieInput = {
    id?: number
    name: string
    description: string
    position?: number
    colonneId?: number | null
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carteCreateOrConnectWithoutCarte_categorieInput = {
    where: carteWhereUniqueInput
    create: XOR<carteCreateWithoutCarte_categorieInput, carteUncheckedCreateWithoutCarte_categorieInput>
  }

  export type categorieCreateWithoutCarte_categorieInput = {
    nom: string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type categorieUncheckedCreateWithoutCarte_categorieInput = {
    id?: number
    nom: string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type categorieCreateOrConnectWithoutCarte_categorieInput = {
    where: categorieWhereUniqueInput
    create: XOR<categorieCreateWithoutCarte_categorieInput, categorieUncheckedCreateWithoutCarte_categorieInput>
  }

  export type carteUpsertWithoutCarte_categorieInput = {
    update: XOR<carteUpdateWithoutCarte_categorieInput, carteUncheckedUpdateWithoutCarte_categorieInput>
    create: XOR<carteCreateWithoutCarte_categorieInput, carteUncheckedCreateWithoutCarte_categorieInput>
    where?: carteWhereInput
  }

  export type carteUpdateToOneWithWhereWithoutCarte_categorieInput = {
    where?: carteWhereInput
    data: XOR<carteUpdateWithoutCarte_categorieInput, carteUncheckedUpdateWithoutCarte_categorieInput>
  }

  export type carteUpdateWithoutCarte_categorieInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    Colonne?: colonneUpdateOneWithoutCartesNestedInput
  }

  export type carteUncheckedUpdateWithoutCarte_categorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    colonneId?: NullableIntFieldUpdateOperationsInput | number | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categorieUpsertWithoutCarte_categorieInput = {
    update: XOR<categorieUpdateWithoutCarte_categorieInput, categorieUncheckedUpdateWithoutCarte_categorieInput>
    create: XOR<categorieCreateWithoutCarte_categorieInput, categorieUncheckedCreateWithoutCarte_categorieInput>
    where?: categorieWhereInput
  }

  export type categorieUpdateToOneWithWhereWithoutCarte_categorieInput = {
    where?: categorieWhereInput
    data: XOR<categorieUpdateWithoutCarte_categorieInput, categorieUncheckedUpdateWithoutCarte_categorieInput>
  }

  export type categorieUpdateWithoutCarte_categorieInput = {
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categorieUncheckedUpdateWithoutCarte_categorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voteCreateManyUserInput = {
    id?: number
    projectId: number
  }

  export type commentCreateManyUserInput = {
    id?: number
    text: string
    projectId: number
    createdAt?: Date | string
  }

  export type projectCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type voteUpdateWithoutUserInput = {
    project?: projectUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type voteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type commentUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUpdateManyWithoutProjectNestedInput
    comments?: commentUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: voteUncheckedUpdateManyWithoutProjectNestedInput
    comments?: commentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voteCreateManyProjectInput = {
    id?: number
    userId: number
  }

  export type commentCreateManyProjectInput = {
    id?: number
    text: string
    userId: number
    createdAt?: Date | string
  }

  export type voteUpdateWithoutProjectInput = {
    user?: userUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type voteUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type commentUpdateWithoutProjectInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carteCreateManyColonneInput = {
    id?: number
    name: string
    description: string
    position?: number
    start_date: Date | string
    end_date: Date | string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carteUpdateWithoutColonneInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte_categorie?: carte_categorieUpdateManyWithoutCarteNestedInput
  }

  export type carteUncheckedUpdateWithoutColonneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte_categorie?: carte_categorieUncheckedUpdateManyWithoutCarteNestedInput
  }

  export type carteUncheckedUpdateManyWithoutColonneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieCreateManyCarteInput = {
    id?: number
    categorieId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieUpdateWithoutCarteInput = {
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: categorieUpdateOneRequiredWithoutCarte_categorieNestedInput
  }

  export type carte_categorieUncheckedUpdateWithoutCarteInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieUncheckedUpdateManyWithoutCarteInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieCreateManyCategorieInput = {
    id?: number
    carteId: number
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type carte_categorieUpdateWithoutCategorieInput = {
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    carte?: carteUpdateOneRequiredWithoutCarte_categorieNestedInput
  }

  export type carte_categorieUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carte_categorieUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    carteId?: IntFieldUpdateOperationsInput | number
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}