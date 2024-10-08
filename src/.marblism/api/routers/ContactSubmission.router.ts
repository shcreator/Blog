/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ContactSubmissionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.createMany(input as any))),

        create: procedure.input($Schema.ContactSubmissionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.create(input as any))),

        deleteMany: procedure.input($Schema.ContactSubmissionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.deleteMany(input as any))),

        delete: procedure.input($Schema.ContactSubmissionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.delete(input as any))),

        findFirst: procedure.input($Schema.ContactSubmissionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).contactSubmission.findFirst(input as any))),

        findMany: procedure.input($Schema.ContactSubmissionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).contactSubmission.findMany(input as any))),

        findUnique: procedure.input($Schema.ContactSubmissionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contactSubmission.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContactSubmissionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.updateMany(input as any))),

        update: procedure.input($Schema.ContactSubmissionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactSubmission.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContactSubmissionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContactSubmissionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactSubmissionGetPayload<T>, Context>) => Promise<Prisma.ContactSubmissionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContactSubmissionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContactSubmissionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactSubmissionGetPayload<T>, Context>) => Promise<Prisma.ContactSubmissionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContactSubmissionFindFirstArgs, TData = Prisma.ContactSubmissionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactSubmissionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactSubmissionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactSubmissionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactSubmissionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactSubmissionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactSubmissionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContactSubmissionFindManyArgs, TData = Array<Prisma.ContactSubmissionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ContactSubmissionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContactSubmissionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactSubmissionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactSubmissionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContactSubmissionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContactSubmissionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContactSubmissionFindUniqueArgs, TData = Prisma.ContactSubmissionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactSubmissionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactSubmissionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactSubmissionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactSubmissionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactSubmissionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactSubmissionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContactSubmissionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContactSubmissionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactSubmissionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactSubmissionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactSubmissionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactSubmissionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactSubmissionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactSubmissionGetPayload<T>, Context>) => Promise<Prisma.ContactSubmissionGetPayload<T>>
            };

    };
}
