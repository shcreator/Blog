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

        createMany: procedure.input($Schema.AttachmentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.createMany(input as any))),

        create: procedure.input($Schema.AttachmentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.create(input as any))),

        deleteMany: procedure.input($Schema.AttachmentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.deleteMany(input as any))),

        delete: procedure.input($Schema.AttachmentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.delete(input as any))),

        findFirst: procedure.input($Schema.AttachmentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).attachment.findFirst(input as any))),

        findMany: procedure.input($Schema.AttachmentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).attachment.findMany(input as any))),

        findUnique: procedure.input($Schema.AttachmentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).attachment.findUnique(input as any))),

        updateMany: procedure.input($Schema.AttachmentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.updateMany(input as any))),

        update: procedure.input($Schema.AttachmentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).attachment.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AttachmentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AttachmentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AttachmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AttachmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AttachmentGetPayload<T>, Context>) => Promise<Prisma.AttachmentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AttachmentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AttachmentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AttachmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AttachmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AttachmentGetPayload<T>, Context>) => Promise<Prisma.AttachmentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AttachmentFindFirstArgs, TData = Prisma.AttachmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AttachmentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AttachmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AttachmentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AttachmentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AttachmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AttachmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AttachmentFindManyArgs, TData = Array<Prisma.AttachmentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AttachmentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AttachmentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AttachmentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AttachmentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AttachmentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AttachmentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AttachmentFindUniqueArgs, TData = Prisma.AttachmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AttachmentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AttachmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AttachmentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AttachmentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AttachmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AttachmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AttachmentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AttachmentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AttachmentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AttachmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AttachmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AttachmentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AttachmentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AttachmentGetPayload<T>, Context>) => Promise<Prisma.AttachmentGetPayload<T>>
            };

    };
}
