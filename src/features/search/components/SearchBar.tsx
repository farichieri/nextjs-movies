'use client';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/store';
import { getMovies } from '..';

const formSchema = z.object({
  movie: z
    .string()
    .min(1, { message: 'input must be at least 2 characters' })
    .max(10, { message: 'input must be less of 11 characters' }),
});

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const { search, setSearch, setMovies } = useSearchStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movie: search,
    },
  });

  useEffect(() => {
    form.setValue('movie', search);
  }, [search, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSearch(values.movie);
    const movies = await getMovies(values.movie, 1);
    setMovies(movies);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-x-2 flex'>
        <FormField
          control={form.control}
          name='movie'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='movie'
                  {...field}
                  className='bg-primary border-none'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default SearchBar;
